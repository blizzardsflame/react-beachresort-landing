import React from "react";
import loadingGif from "../img/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h4>Loading Rooms...</h4>
      <img src={loadingGif} alt="loading" />
    </div>
  );
};

export default Loading;
