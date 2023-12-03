// Author: Swaraj Shrestha

// Description: This file contains the About component. This component is used to display the About page.

// About component definition
const About = () => {
  return (
    // Container for the about section
    <div id="about" className="max-w-[1080px] m-auto p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-black">
        ABOUT
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed text-justify mt-5">
        Nestled in the heart of Halifax, Nova Scotia, the St. Margaret’s Bay Area
        Woodland Conservation Site is a sanctuary of natural beauty and biodiversity.
        Spanning an impressive <b>200 acres</b>, this conservation area is a verdant tapestry
        of towering trees, lush undergrowth, and vibrant wildlife.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
        The woodland is home to a diverse range of flora and fauna, including the
        majestic <b>Red Maple</b>, the delicate <b>Wild Carrot</b>, and the robust <b>Coltsfoot</b>.
        The <b>Sheep Laurel</b> and <b>Multiflora Rose</b> add a splash of color to the landscape,
        while the <b>Star-nose Mole</b> and the <b>Little Brown Bat</b> represent some of the
        unique wildlife species that inhabit the area.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
        The St. Margaret’s Bay Area Woodland Conservation Site is not just a haven for
        wildlife, but also a living testament to our natural heritage. It is a place
        where the past meets the present, where the whispering winds carry stories of
        times long gone, and where every leaf and stone is a piece of history waiting
        to be discovered.
      </p>
      <div className="grid md:grid-cols-2 gap-4 w-full py-8">
        <div className="flex flex-col mr-5">
          <h1 className="text-center font-mono text-xl text-gray-700 leading-relaxed mt-4 py-8" style={{ fontWeight: 'bold' }}>MISSION STATEMENT</h1>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
            <em>Our mission is to preserve and enhance the ecological integrity of the St. Margaret’s Bay
              Area Woodland Conservation Site. We are committed to protecting its diverse habitats,
              promoting sustainable use, and fostering an appreciation for our natural heritage through
              education and community engagement.</em>
          </p>
          <h1 className="text-center font-mono text-xl text-gray-700 leading-relaxed mt-4 py-8" style={{ fontWeight: 'bold' }}>VISION</h1>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
            We envision the St. Margaret’s Bay Area Woodland Conservation Site as a thriving ecosystem,
            teeming with life and serving as a model for conservation efforts. We strive to create a
            space where nature can flourish, where future generations can experience the wonder of
            the woodland, and where the legacy of our natural heritage is safeguarded for years to
            come.
          </p>
        </div>
        <div className="flex flex-col">
          {/* Image */}
          <img src="images/WalkPark.jpg" alt="Forest" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default About;
