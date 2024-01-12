




import React, { useRef, useState, useEffect } from 'react';

const VideoPlayer = ({ videoUrl, subtitles }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
      }
    };

    videoRef.current.addEventListener('timeupdate', handleTimeUpdate);

    // return () => {
    //   videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    // };
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md relative mt-4">
      <video ref={videoRef} controls className="w-full h-[200px]" src={videoUrl} />
      <div className=" mt-32 absolute top-0 left-12 items-center  text-white">
        {subtitles.map((subtitle) => (
          <div key={subtitle.timestamp} className={currentTime >= subtitle.timestamp ? 'block' : 'hidden'}>
            <span className="font-bold  text-blue-600">{formatTime(subtitle.timestamp)}:</span>  
            <p className="mt-1 bg-transparent p-2 rounded-md text-blue-600">{subtitle.text}</p>
          </div>
        ))}
      </div>    
    </div>
  );
};

export default VideoPlayer;

