import React from "react";

function VideoComponent( { video }) {
  
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h2>{video.title}</h2>
      <span> {video.views} Views | Uploaded: {video.createdAt} </span>
    </div>
  );
}

export default VideoComponent;