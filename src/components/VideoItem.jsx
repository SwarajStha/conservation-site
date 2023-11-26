// Author: Swaraj Shrestha

// Description: This file contains the VideoItem component. This component is used to display a video tile.

import { useState } from 'react';

// VideoItem component definition
const VideoItem = ({ video, title }) => {
    // State to control the visibility of the video player
    const [showPlayer, setShowPlayer] = useState(false);

    // Handler for click event on the video tile
    const handleClick = () => {
        setShowPlayer(true);
    };

    // Handler for click event on the close button
    const handleClose = (e) => {
        e.stopPropagation();
        setShowPlayer(false);
    };

    return (  
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group 
            hover:bg-gradient-to-r from-gray-200 to-[#618c43]" onClick={handleClick}>

            {/* Video tile with hover and click functionality */}

            {/* Video element that plays automatically, loops, and is muted */}
            <video src={video} alt="/" className="object-cover rounded-xl group-hover:opacity-10 h-full" autoPlay loop muted />
            {/* Hidden div for displaying title when hovering */}
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                    {title}
                </h3>
            </div>

            {/* Conditional rendering of a fullscreen video player */}
            {showPlayer && (
                <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
                    <div className="relative w-3/4 h-3/4">
                        <video src={video} controls className="w-full h-full" />
                        {/* Close button */}
                        <button onClick={handleClose} className="absolute top-0 right-0 m-4 p-2 bg-white rounded-full 
                            shadow-lg text-xl">X</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoItem;