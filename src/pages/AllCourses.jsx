import React, { useState, useEffect } from "react";
import { Client, Storage } from "appwrite";
import { Link } from "react-router-dom";
import conf from "../conf/conf";

function FileList() {
  const [files, setFiles] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Initialize Appwrite Client
  const client = new Client()
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

  const storage = new Storage(client);

  // Fetch the list of files
  const fetchFiles = async () => {
    try {
      const response = await storage.listFiles(conf.appwriteBucketId);
      setFiles(response.files);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  // Handle thumbnail click to show video player
  const handleThumbnailClick = (file) => {
    setSelectedVideo(file);
  };

  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Uploaded Files</h2>
      <Link to="/add-videos">Back to Upload Page</Link>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {files.map((file) => (
          <div key={file.$id} style={{ width: "200px", textAlign: "center" }}>
            <p>{file.name}</p>

            {/* Thumbnail preview as a small video */}
            <video
              width="100%"
              height="120"
              controls={false}
              onClick={() => handleThumbnailClick(file)}
              style={{ cursor: "pointer" }}
              src={`${conf.appwriteUrl}/storage/buckets/${conf.appwriteBucketId}/files/${file.$id}/view?project=${conf.appwriteProjectId}`}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>

      {/* Conditionally render video player overlay */}
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

export default FileList;
