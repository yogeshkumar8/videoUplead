


  // src/App.js
  import React, { useState } from 'react';
  import UploadVideo from "./components/UploadVideo";
  import AddSubtitles from "./components/AddSubtitles";
  import VideoPlayer from "./components/VideoPlayer";

  const App = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [subtitles, setSubtitles] = useState([]);

    const handleUpload = (videoFile) => {

      setVideoUrl(URL.createObjectURL(videoFile));
    };

    const handleAddSubtitle = (newSubtitle) => {

      setSubtitles((prevSubtitles) => [...prevSubtitles, newSubtitle]);
    };

    return (
      <div className=' bg-purple-500 h-screen'>
        <UploadVideo onUpload={handleUpload} />
        <AddSubtitles onAddSubtitle={handleAddSubtitle} />
        <VideoPlayer videoUrl={videoUrl} subtitles={subtitles} />
      </div>
    );
  };

  export default App;

