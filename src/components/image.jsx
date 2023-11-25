//Author: Kazi Istiak
//This component is used to represent and display individual image tiles within the gallery. It is designed to render an image along with its associated information, such as the image name and description.
import React, { useState } from "react";
import PropTypes from "prop-types";

const Image = ({ imageName, description }) => {
  // State to track whether the image is clicked for full-screen view
  const [showFullScreen, setShowFullScreen] = useState(false);

  // Click event handler to toggle full-screen view
  const handleClick = () => {
    setShowFullScreen(!showFullScreen);
  };

  // Click event handler to close full-screen view
  const handleClose = () => {
    setShowFullScreen(false);
  };

  // Function to remove file extension from the image name
  const toDot = (result) => {
    let dotPosition = result.lastIndexOf(".");
    if (dotPosition !== -1) {
      result = result.slice(0, dotPosition);
    }
    return result;
  };

  return (
    // Container for the image with hover and click functionality
    <div
      className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#618c43]"
      onClick={handleClick}
    >
      {/* Image element with hover effect */}
      <img
        className="object-cover rounded-xl group-hover:opacity-25 h-72"
        src={`images/flora-fauna/${imageName}`}
        alt=" "
      />

      {/* Hidden div for displaying name when hovering */}
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {/* Show only the name without the file extension when hovering */}
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {toDot(imageName)}
        </h3>
      </div>

      {/* Full-screen view when showFullScreen is true */}
      {showFullScreen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={handleClose}
        >
          <div className="relative w-3/4 h-3/4">
            {/* Full-size image in the full-screen view */}
            <img
              src={`images/flora-fauna/${imageName}`}
              alt=" "
              className="w-full h-full object-cover rounded-xl"
            />
            {/* Description area underneath the full-size image */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-white text-black">
              {/* Show the name without the file extension */}
              <h3 className="text-2xl font-bold tracking-wider text-center">
                {toDot(imageName)}
              </h3>
              {/* Full description underneath the big image */}
              <p>{description}</p>
            </div>
            {/* Close button for exiting full-screen view */}
            <button className="absolute top-0 right-0 m-4 p-2 bg-white rounded-full shadow-lg text-xl cursor-pointer">
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// PropTypes to ensure correct data types for props
Image.propTypes = {
  imageName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Export the Image component
export default Image;
