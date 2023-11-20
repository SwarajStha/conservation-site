// Description: This file contains the Navbar component.
// Author: Swaraj Shrestha

import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { GrGallery } from "react-icons/gr";
import { LuShovel } from "react-icons/lu";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { IoIosInformationCircleOutline, IoMdContact } from "react-icons/io";

// Navbar component definition
const Navbar = () => {
    // State to control the visibility of the navigation menu
    const [nav, setNav] = useState(false);

    // Handler for click event on the menu icon
    const handleNav = () => {
        // Toggle the visibility of the navigation menu when the menu icon is clicked
        setNav(!nav);
    };

    return (
        <div>
            // Menu icon
            <AiOutlineMenu
                onClick={handleNav}
                className="fixed top-4 left-4 z-[99] md:hidden pointer-events-auto"
            />

            // Navigation menu
            {nav ? (
                <div
                    className="fixed w-full h-screen bg-white/90 flex
                        flex-col justify-center items-center z-20"
                >
                    // Navigation links
                    <a
                        href="#homepage"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        onClick={() => setNav(false)}
                    >
                        <AiOutlineHome size={20} />
                        <span className="pl-4">Home</span>
                    </a>

                    <a
                        href="#about"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        onClick={() => setNav(false)}
                    >
                        <IoIosInformationCircleOutline size={20} />
                        <span className="pl-4">About</span>
                    </a>

                    <a
                        href="#gallery"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        onClick={() => setNav(false)}
                    >
                        <GrGallery size={20} />
                        <span className="pl-4">Gallery</span>
                    </a>

                    <a
                        href="#burial"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        onClick={() => setNav(false)}
                    >
                        <LuShovel size={20} />
                        <span className="pl-4">Burial</span>
                    </a>

                    <a
                        href="#ecosystem"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        onClick={() => setNav(false)}
                    >
                        <GiPlantsAndAnimals size={20} />
                        <span className="pl-4">Ecosystem</span>
                    </a>

                    <a
                        href="#contact"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg
                            bg-shadow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        onClick={() => setNav(false)}
                    >
                        <IoMdContact size={20} />
                        <span className="pl-4">Contact</span>
                    </a>
                </div>
            ) : null}

            // Navigation menu for larger screens                 
            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    // Navigation links for larger screens
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
