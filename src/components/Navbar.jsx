import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { GrGallery } from "react-icons/gr";
import { LuShovel } from "react-icons/lu";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { IoIosInformationCircleOutline, IoMdContact } from "react-icons/io";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu
                onClick={handleNav}
                className="absolute top-4 left-4 z-[99] md:hidden"
            />
            {nav ? (
                <div
                    className="fixed w-full h-screen bg-white/90 flex
                        flex-col justify-center items-center z-20"
                >
                    <a
                        href="#homepage"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <AiOutlineHome size={20} />
                        <span className="pl-4">Home</span>
                    </a>

                    <a
                        href="#about"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <IoIosInformationCircleOutline size={20} />
                        <span className="pl-4">About</span>
                    </a>

                    <a
                        href="#gallery"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <GrGallery size={20} />
                        <span className="pl-4">Gallery</span>
                    </a>

                    <a
                        href="#burial"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <LuShovel size={20} />
                        <span className="pl-4">Burial</span>
                    </a>

                    <a
                        href="#ecosystem"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <GiPlantsAndAnimals size={20} />
                        <span className="pl-4">Ecosystem</span>
                    </a>

                    <a
                        href="#contact"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <IoMdContact size={20} />
                        <span className="pl-4">Contact</span>
                    </a>
                </div>
            ) : (
                <div></div>
            )}
            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    <a
                        href="#homepage"
                        className="rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                        <AiOutlineHome size={30} />
                    </a>

                    <a
                        href="#about"
                        className="rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                        <IoIosInformationCircleOutline size={30} />
                    </a>

                    <a
                        href="#gallery"
                        className="rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                        <GrGallery size={30} />
                    </a>

                    <a
                        href="#burial"
                        className="rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                        <LuShovel size={30} />
                    </a>

                    <a
                        href="#ecosystem"
                        className="rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                        <GiPlantsAndAnimals size={30} />
                    </a>

                    <a
                        href="#contact"
                        className="rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                        <IoMdContact size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
