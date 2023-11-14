import VideoItem from './VideoItem'
import ForestVid from '../assets/Forest.mp4'
import WaterfallVid from '../assets/Waterfall.mp4'
import AutumnForestVid from '../assets/AutumnForest.mp4'
import WinterForestVid from '../assets/WinterForest.mp4'

const Video = () => {
    return (
        <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <div className='grid sm:grid-cols-2 gap-6 items-center py-5'>
                <VideoItem video={WaterfallVid} title='Drone 1'/>
                <VideoItem video={ForestVid} title='Drone 2'/>
                <VideoItem video={AutumnForestVid} title='Drone 3'/>
                <VideoItem video={WinterForestVid} title='Drone 4'/>
            </div>
        </div>
    );
};

export default Video;