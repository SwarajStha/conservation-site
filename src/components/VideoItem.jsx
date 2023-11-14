
const VideoItem = ({video, title}) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#618c43]">
            <video src={video} alt="/" className="object-cover rounded-xl group-hover:opacity-10 h-full" autoPlay loop muted />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"> 
                <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                    {title}
                </h3>
                <p className="pb-4 pt-2 text-white tex-center">Make so that when clicked comes out</p>
            </div>
        </div>
    );
};

export default VideoItem;