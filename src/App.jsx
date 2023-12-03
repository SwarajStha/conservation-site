// Author: Swaraj Shrestha

import Navbar from "./components/Navbar.jsx";
import Homepage from "./components/Homepage.jsx";
import Gallery from "./components/Gallery.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Burial from "./components/Burial.jsx"
import Ecosystem from "./components/Ecosystem.jsx"

function App() {
    return (
        <div>
            <Navbar />
            <Homepage />
            <About />
            <Gallery />
            <Burial />
            <Ecosystem />
            <Contact />
        </div>
    );
};

export default App;

