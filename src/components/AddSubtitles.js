

// src/components/AddSubtitles.js
import React, { useState } from 'react';

const AddSubtitles = ({ onAddSubtitle }) => {
  const [timestamp, setTimestamp] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const handleAddSubtitle = () => {
    if (timestamp && subtitle) {
      onAddSubtitle({ timestamp: parseFloat(timestamp), text: subtitle });
      setTimestamp('');
      setSubtitle('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-4 bg-white rounded-md shadow-md">
      <input
        type="number"
        placeholder="Timestamp (seconds)"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
        className="block w-full border border-gray-300 py-2 px-4 mb-4"
      />
      <input
        type="text"
        placeholder="Subtitle"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        className="block w-full border border-gray-300 py-2 px-4 mb-4"
      />
      <button
        onClick={handleAddSubtitle}
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
      >
        Add Subtitle
      </button>
    </div>
  );
};

export default AddSubtitles;
