

// src/components/UploadVideo.js
import React, { useState } from 'react';

const UploadVideo = ({ onUpload }) => {
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handleUpload = () => {
    if (videoFile) {
      onUpload(videoFile);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <label className="block text-lg font-semibold mb-2">Upload Video</label>
      <div className="flex items-center space-x-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="border border-gray-300 py-2 px-4 w-full"
        />
        <button
          onClick={handleUpload}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadVideo;
