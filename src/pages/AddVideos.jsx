import React, { useState } from "react";
import { Client, Storage } from "appwrite";
import conf from "../conf/conf.js";

function VideoUpload() {
  const [video, setVideo] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  // Initialize Appwrite Client
  const client = new Client()
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

  const storage = new Storage(client);

  const handleFileChange = (event) => {
    setVideo(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!video) {
      setUploadStatus("Please select a video file to upload.");
      return;
    }

    setUploadStatus("Uploading...");
    try {
      const response = await storage.createFile(
        conf.appwriteBucketId,
        "unique()", // unique ID will be generated for the file
        video
      );
      setUploadStatus("Upload successful! File ID: " + response.$id);
    } catch (error) {
      setUploadStatus("Error uploading file: " + error.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload a Video</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
        Upload
      </button>
      <p>{uploadStatus}</p>
    </div>
  );
}

export default VideoUpload;
