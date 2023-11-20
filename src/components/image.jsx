// Description: This file contains the Image component. This component is used to display image tiles.
// Author: Swaraj Shrestha

// Image component definition
const Image = ({ imageName }) => {
    // Convert imageName to a format without the file extension
    let result = toDot(imageName)

    return (
        // Container for the image
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl 
            group hover:bg-gradient-to-r from-gray-200 to-[#618c43]">

            <img className="object-cover rounded-xl group-hover:opacity-25 h-full" src={`images/flora-fauna/${imageName}`} alt=" " />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"> 
                <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                    {result}
                </h3>
            </div>
        </div>
    );   
};

// Function to remove the file extension from a string
function toDot (result) {
    // Find the position of the dot in the string
    let dotPosition = result.indexOf('.');
    // If a dot is found, remove the file extension
    if (dotPosition !== -1) {
        result = result.slice(0, dotPosition)
    }
    return (
        result
    )
}

{/* <div className="px-6 py-4">
<div className="text-center font-bold text-black-500 text-xl mb-2">
    <h3>{result}</h3>
</div>
</div> */}

export default Image;
