// Author: Swaraj Shrestha

// Description: This file contains the Video component. This component is used to display video tiles.

import VideoItem from './VideoItem'
import WalkAround from '../assets/WalkAround.mp4'
import theArea from '../assets/theArea.mp4'

// Video component definition
const Video = () => {
    return (
        // Container for the video items
        <div className='w-full m-auto p-4 py-16'>

            <div className='grid sm:grid-cols-2 gap-6 items-center py-5'>
                <VideoItem video={WalkAround} title='Louisa walking around the conservation area' />
                <VideoItem video={theArea} title='Expansive spanning view of the conservation area'/>
            </div>
        </div>
    );
};

export default Video;