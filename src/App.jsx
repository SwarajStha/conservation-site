import Navbar from "./components/Navbar.jsx";
import Homepage from "./components/Homepage.jsx";
import Gallery from "./components/Gallery.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import { useState } from 'react'

function App() {
    return (
        <div>
            <Navbar />
            <Homepage />
            <Gallery />
            <About />
            <Contact />
        </div>
    );
};

export default App;

