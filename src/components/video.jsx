// Author: Swaraj Shrestha

// Description: This file contains the Video component. This component is used to display video tiles.

import VideoItem from "./VideoItem";

// Video component definition
const Video = () => {
  return (
    // Container for the video items
    <div className="w-full m-auto p-4 py-16">
      <div className="grid sm:grid-cols-2 gap-6 items-center py-5">
        <VideoItem video="images/Waterfall.mp4" title="Waterfall" />
        <VideoItem video="images/Forest.mp4" title="Forest" />
      </div>
    </div>
  );
};

export default Video;
