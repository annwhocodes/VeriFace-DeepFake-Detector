import React, { useState } from 'react';
import './UploadVideo.css';

const UploadVideo = () => {
  const [video, setVideo] = useState(null);

  const handleVideoUpload = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!video) {
      alert('Please upload a video.');
      return;
    }
    // Send video to backend
    alert('Video uploaded successfully!');
  };

  return (
    <div className="upload-container">
      <div className="upload-box">
        <h2>Add files to detect Deepfake</h2>
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          className="upload-button"
        />
        {video && (
          <div className="video-preview">
            <video src={URL.createObjectURL(video)} controls width="400" />
          </div>
        )}
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UploadVideo;
