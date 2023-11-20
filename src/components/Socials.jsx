// Description: This file contains the Socials component. This component is used to display social media icons.
// Author: Emil Bero

import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoPinterestAlt } from 'react-icons/bi';
import { BiLogoYoutube } from 'react-icons/bi';

// Socials component definition
const Socials = () => {
    return (
        // Container for the social media icons
        <div>
            <div className='flex flex-row z-10'>
                <div className='flex flex-row'>

                    <a href="#homepage" className='rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaFacebook size={30} />
                    </a>

                    <a href="#gallery" className='rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaXTwitter size={30} />
                    </a>

                    <a href="#burial" className='rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineInstagram size={30} />
                    </a>

                    <a href="#ecosystem" className='rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BiLogoPinterestAlt size={30} />
                    </a>

                    <a href="#about" className='rounded-full shadow-lg 
                        bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BiLogoYoutube size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Socials;
