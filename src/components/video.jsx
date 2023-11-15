import VideoItem from './VideoItem'
import ForestVid from '../assets/Forest.mp4'
import WaterfallVid from '../assets/Waterfall.mp4'

const Video = () => {
    return (
        <div className='w-full m-auto p-4 py-16'>
            <div className='grid sm:grid-cols-2 gap-6 items-center py-5'>
                <VideoItem video={WaterfallVid} title='Drone 1' />
                <VideoItem video={ForestVid} title='Drone 2' />
            </div>
        </div>
    );
};

export default Video;