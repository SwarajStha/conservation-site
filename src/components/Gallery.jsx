import Image from "./image.jsx";
import Video from "./video.jsx";

const Gallery = () => {

    return (
        <div id="gallery" className="border w-full m-auto md:pl-20 p-4 py-16 items-center">
            <h1 className="py-4 text-4xl font-bold text-center text-black">
                GALLERY
            </h1>
            <div className="items-center">
                <Video />
            </div>
            <div>
                <h2 className="py-4 text-3xl font-bold text-center text-black">
                    Fauna
                </h2>
                <div className="grid sm:grid-cols-5 gap-5">
                    <Image imageName="Blue Jay.jpeg" />
                    <Image imageName="Mallard.jpg" />
                    <Image imageName="Osprey.jpg" />
                    <Image imageName="White-tailed Deer.jpg" />
                    <Image imageName="Common Eastern Bumble Bee.jpg" />
                </div>
            </div>

            <div>
                <h2 className="py-10 text-3xl font-bold text-center text-black">
                    Flora
                </h2>
                <div className="grid sm:grid-cols-4 gap-8">
                    <Image imageName="White Spruce.jpeg" />
                    <Image imageName="Wild Carrot.jpeg" />
                    <Image imageName="Pink Lady's Slipper.jpg" />
                    <Image imageName="Bluebead Lily.jpg" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;