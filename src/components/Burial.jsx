import React from "react";

const Burial = () => {
  return (
    <div>
      <div id="burial" className="max-w-[1080px] m-auto p-4 py-16 relative">
        <div>
          {/* Image */}
          <img
            src="src/assets/burial.jpg"
            alt="picture of burial"
            className="w-full h-auto"
          />
        </div>
        {/* Text Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="text-4xl font-bold">The Burial You Should Know</h2>
          {/* <p className="mt-2 text-lg">Additional text if needed</p> */}
        </div>
        </div>
        {/* Page Content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="py-4 text-4xl font-bold">Burial</h1>
          <p>Page content goes here </p>
        </div>
      
    </div>
  );
};

export default Burial;
