import React from "react";
import "./styles.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="render-loader ui segment">
        <div className="ui active dimmer">
          <div className="ui large text loader">Loading</div>
        </div>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail">
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" frameBorder="0" />
      </div>
      <div className="ui red piled segment">
        <h4 className="ui red ribbon label">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
