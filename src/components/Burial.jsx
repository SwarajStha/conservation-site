//Author: Emil Bero

//Description: This file contains the Burial component. This component is used to display the burial page.

import React from "react";

const Burial = () => {
  return (
    <div>
      <div id="burial" className="max-w-[1080px] m-auto p-4 py-16">
        <div className="mb-10">
          {/* This is your blank space */}
        </div>
        <h1 className="py-4 text-4xl font-bold text-center text-black">
          Green Burial
        </h1>
        <p className="text-lg text-gray-700 text-justify mt-4">
          Discover a serene sanctuary nestled within the heart of nature, where
          reverence for the departed intertwines seamlessly with a commitment to
          woodland conservation. Experience a tranquil final resting place that
          seamlessly integrates with nature, creating a sustainable legacy for
          your loved ones.
        </p>
        <p className="text-lg text-green-700 text-justify mt-5">
          <b>What is a Green Burial?</b>
        </p>

        <div className="grid md:grid-cols-2 gap-4 w-full py-8">
          <div className="flex flex-col mt-5">
            <p className="text-lg text-gray-700 text-justify mt-5">
              Also known as natural burials, green burials are an environmentally
              conscious alternative to traditional burial practices. During a green
              burial, the deceased is laid to rest in a biodegradable casket,
              shroud, or urn crafted from natural materials like wood or wicker.
              Notably, embalming, which involves the use of toxic chemicals, is
              omitted. These eco-friendly burials take place in specially designated
              natural burial grounds, such as the one described here. Shallow graves
              facilitate swift and natural decomposition, aided by microbial
              activity and the surrounding environment.
            </p>
            <p className="text-lg text-gray-700 text-justify">
              Incorporating natural burials into the Nova Scotian landscape has
              the potential to foster partnerships between land trusts and
              natural burial grounds in the effort to protect the environment.
              These burial sites actively contribute to biodiversity and
              conservation initiatives. Instead of traditional headstones,
              minimalist markers like native plants or GPS coordinates are used.
              All proceeds generated from green burials at this site directly
              support the preservation and restoration of the adjacent natural
              habitat. A green burial is a sustainable and harmonious approach
              to a final resting place, paying homage to both the departed and
              the ecosystem.
            </p>
            <p className="text-lg text-gray-700 text-justify mt-5">
              For additional information or to inquire about our green burial
              service, please visit our contact page. Our volunteers are eager
              to connect with you and provide the details you seek.
            </p>
          </div>
          <div className="flex flex-col mt-1">
            <div className="mb-5">
              {/* This is your blank space */}
            </div>
            {/* Image */}
            <img
              src="images/burial.jpg"
              alt="picture of burial"
              className="w-auto h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burial;
