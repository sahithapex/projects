import React, { useRef, useState } from 'react';
import './video.css';
import { Play, Pause } from 'lucide-react';

const Video = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-container">
      <video ref={videoRef} src={src} className="video-player" controls />
      <button className="play-button" onClick={togglePlay}>
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
    </div>
  );
};

export default Video;
