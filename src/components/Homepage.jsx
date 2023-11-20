// Description: This file contains the Homepage component. This component is used to display the homepage.
// Author: Swaraj Shrestha

import { TypeAnimation } from 'react-type-animation'

// Homepage component definition
const Homepage = () => {
    return (
        // Container for the homepage content
        <div id='homepage'>
            <img className='w-full h-screen object-cover object-left scale'
                src="/AI_woods(I).jpg" alt="Image location moved" />

            <div className='w-full h-screen absolute top-0 left-0 bg-white/10'>
                <div className='max-w-[720px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-5xl font-bold text-white'>St. Margaret's Bay Area</h1>
                    <h2 className='flex sm:text-xl text-l pt-4 text-white'>
                        {<TypeAnimation
                            sequence={[
                                'Woodland Conservation Site',
                                2000,
                                'CSCI 3428 - Project - Group H',
                                2000,
                            ]}
                            wrapper="div"
                            speed={40}
                            cursor={true}
                            style={{ fontSize: '2em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />}

                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
