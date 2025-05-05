import React, { useState, useEffect } from "react";
import { Client, Storage, Databases, Query, ID } from "appwrite";
import { Link } from "react-router-dom";
import conf from "../conf/conf";

function AllCourses({ userId }) {
  const [courses, setCourses] = useState([]);
  const [selectedSection, setSelectedSection] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [userRatings, setUserRatings] = useState({});

  // Initialize Appwrite Client
  const client = new Client()
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

  const storage = new Storage(client);
  const databases = new Databases(client);

  // Fetch courses from database
  const fetchCourses = async () => {
    try {
      const queries = selectedSection !== 'all' 
        ? [Query.equal('sections', selectedSection)] 
        : [];

      const response = await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCoursesCollectionId,
        queries
      );
      setCourses(response.documents);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Fetch user ratings
  const fetchUserRatings = async () => {
    if (!userId) return;
    
    try {
      const response = await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteRatingsCollectionId,
        [Query.equal('userId', userId)]
      );
      
      const ratingsMap = response.documents.reduce((acc, rating) => {
        acc[`${rating.courseId}-${rating.section}`] = rating.rating;
        return acc;
      }, {});
      setUserRatings(ratingsMap);
    } catch (error) {
      console.error("Error fetching ratings:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchUserRatings();
  }, [selectedSection, userId]);

  const handleRating = async (courseId, section, newRating) => {
    if (!userId) return;

    try {
      // Check existing rating
      const existingRating = await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteRatingsCollectionId,
        [
          Query.equal('courseId', courseId),
          Query.equal('userId', userId),
          Query.equal('section', section)
        ]
      );

      if (existingRating.documents.length > 0) {
        // Update existing rating
        await databases.updateDocument(
          conf.appwriteDatabaseId,
          conf.appwriteRatingsCollectionId,
          existingRating.documents[0].$id,
          { rating: newRating }
        );
      } else {
        // Create new rating
        await databases.createDocument(
          conf.appwriteDatabaseId,
          conf.appwriteRatingsCollectionId,
          ID.unique(),
          {
            userId: userId,
            courseId: courseId,
            section: section,
            rating: newRating
          }
        );
      }

      // Update local state
      setUserRatings(prev => ({
        ...prev,
        [`${courseId}-${section}`]: newRating
      }));
      
      // Refresh course data
      fetchCourses();
    } catch (error) {
      console.error('Error saving rating:', error);
    }
  };

  // Video handling functions remain the same
  const handleThumbnailClick = (file) => setSelectedVideo(file);
  const closeVideoPlayer = () => setSelectedVideo(null);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Courses</h2>
      <Link to="/add-videos">Back to Upload Page</Link>

      {/* Section Filter */}
      <div style={{ margin: "20px 0" }}>
        <button 
          onClick={() => setSelectedSection('all')}
          style={{ fontWeight: selectedSection === 'all' ? 'bold' : 'normal' }}
        >
          All Sections
        </button>
        {['sql', 'java', 'javascript', 'c++'].map((section) => (
          <button
            key={section}
            onClick={() => setSelectedSection(section)}
            style={{ 
              margin: "0 10px",
              fontWeight: selectedSection === section ? 'bold' : 'normal' 
            }}
          >
            {section.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {courses.map((course) => (
          <div key={course.$id} style={{ 
            width: "300px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px"
          }}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Sections: {course.sections.join(', ')}</p>

            {/* Video Thumbnail */}
            {course.fileId && (
              <video
                width="100%"
                height="150"
                controls={false}
                onClick={() => handleThumbnailClick({ $id: course.fileId })}
                style={{ cursor: "pointer" }}
                src={`${conf.appwriteUrl}/storage/buckets/${conf.appwriteBucketId}/files/${course.fileId}/view?project=${conf.appwriteProjectId}`}
              />
            )}

            {/* Rating Section */}
            <div style={{ marginTop: "10px" }}>
              <div style={{ display: "flex", gap: "5px" }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRating(course.$id, selectedSection, star)}
                    style={{
                      cursor: "pointer",
                      color: star <= (userRatings[`${course.$id}-${selectedSection}`] || 0)
                        ? "#ffd700"
                        : "#ddd",
                      background: "none",
                      border: "none",
                      fontSize: "1.2rem"
                    }}
                    disabled={!userId}
                  >
                    ★
                  </button>
                ))}
              </div>
              <p>
                Average Rating:{" "}
                {course.averageRatings?.[selectedSection]?.toFixed(1) || "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Player Overlay (remains the same) */}
     {/* Video Player Overlay */}
{selectedVideo && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    }}
    onClick={closeVideoPlayer}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{ position: "relative" }}
    >
      <video
        width="720"
        height="480"
        controls
        autoPlay
        src={`${conf.appwriteUrl}/storage/buckets/${conf.appwriteBucketId}/files/${selectedVideo.$id}/view?project=${conf.appwriteProjectId}`}
      >
        Your browser does not support the video tag.
      </video>
      <button
        onClick={closeVideoPlayer}
        style={{
          position: "absolute",
          top: "-10px",
          right: "-10px",
          backgroundColor: "#fff",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
          fontSize: "16px",
          borderRadius: "50%",
        }}
      >
        X
      </button>
    </div>
  </div>
)}
    </div>
  );
}

export default AllCourses;