// SubtitleViewer.js
import React, { useEffect, useState } from 'react';

const SubtitleViewer = ({ videoId }) => {
  const [subtitles, setSubtitles] = useState([]);
  const [currentSubtitle, setCurrentSubtitle] = useState(null);

  useEffect(() => {
    const fetchSubtitles = async () => {
      try {
        const response = await fetch(`http://localhost:3001/get_subtitles/${videoId}`);
        const data = await response.json();
        setSubtitles(data.subtitles);
      } catch (error) {
        console.error('Error fetching subtitles:', error);
      }
    };

    fetchSubtitles();
  }, [videoId]);

  const getCurrentSubtitle = (currentTime) => {
    const subtitle = subtitles.find(sub => currentTime >= sub.timestamps.start && currentTime <= sub.timestamps.end);
    return subtitle || null;
  };

  const handleVideoTimeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    const subtitle = getCurrentSubtitle(currentTime);
    setCurrentSubtitle(subtitle);
  };

  return (
    <div className="mb-4">
      <video controls width="100%" onTimeUpdate={handleVideoTimeUpdate}>
        <source src={`http://localhost:3001/uploads/${videoId}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {currentSubtitle && (
        <div className="mt-2">
          <p className="font-bold">Subtitle:</p>
          <p>{currentSubtitle.content}</p>
        </div>
      )}
    </div>
  );
};

export default SubtitleViewer;
