//Author: Kazi Istiak
//This component is designed to display a collection of images and videos in a structured layout.
import React from 'react';
import Image from './image.jsx';
import Video from './video.jsx';

// Gallery component definition
const Gallery = () => {
    return (

// Container for the entire gallery content
        <div id="gallery" className="border w-full m-auto md:pl-20 p-4 py-16 items-center">
            <h1 className="py-4 text-4xl font-bold text-center text-black">
                GALLERY
            </h1>
            <div className="items-center">
                <Video />
            </div>
            <div>
                <h2 className="py-4 text-3xl font-bold text-center text-black">
                    Fauna
                </h2>
                <div className="grid sm:grid-cols-5 gap-5">
                    <Image imageName="Merlin.png" description="The Merlin is a small and agile falcon with a rapid, direct flight. It's known for its distinctive facial markings and is often found in open country." />
                    <Image imageName="Mallard.jpg" description="Mallards are dabbling ducks recognized by the male's glossy green head, white neck ring, and chestnut-brown chest. Females are mottled brown with an orange bill." />
                    <Image imageName="Osprey.jpg" description="Ospreys are large, fish-eating raptors with a distinctive dark eye stripe. They are often seen near bodies of water, using their sharp talons to catch fish." />
                    <Image imageName="White-tailed Deer.jpg" description="White-tailed Deer are easily identified by their long, fluffy tails that are brown on top and white underneath. Bucks have antlers, and their coats vary in color." />
                    <Image imageName="Common Eastern Bumble Bee.jpg" description="These bees are known for their fuzzy appearance and are important pollinators. They have a distinctive black and yellow striped pattern." />
                    <Image imageName="American Black Bear.jpg" description="Black Bears are large mammals with a robust body, a short tail, and rounded ears. Despite their name, they can be brown, cinnamon, or black." />
                    <Image imageName="American Red Squirrel.jpeg" description=" Red Squirrels are small, territorial rodents with a reddish-brown coat and a bushy tail. They are active and vocal, often chattering loudly." />
                    <Image imageName="Barred Owl.jpg" description="Barred Owls have a rounded face and dark eyes, with barred patterns on their feathers." />
                    <Image imageName="Black-capped Chickadee.jpg" description="Chickadees are small birds with a black cap and bib, white cheeks, and a gray back. They are known for their cheerful 'chick-a-dee-dee-dee' call." />
                    <Image imageName="Common Garter Snake.jpg" description="Garter Snakes are slender, with longitudinal stripes along their bodies. They are non-venomous and are commonly found in a variety of habitats." />
                    <Image imageName="Green Frog.jpg" description="Green Frogs are medium-sized frogs with bright green skin. They have prominent tympanic membranes behind their eyes and are often found near water." />
                    <Image imageName="Japanese Beetle.jpg" description="Japanese Beetles are metallic green and bronze beetles known for their distinctive feeding habits, damaging plants by skeletonizing leaves." />
                    <Image imageName="Painted Turtle.jpg" description="Painted Turtles have colorful markings on their shells and skin. They are commonly found basking on logs in ponds and are known for their striking appearance." />
                    <Image imageName="Song Sparrow.jpg" description="Song Sparrows have brown and streaked plumage with a central breast spot. They are known for their varied and melodious songs." />
                    <Image imageName="Bronze Ground Beetle.jpg" description="Bronze Ground Beetles are predatory beetles with a metallic bronze appearance. They are beneficial in controlling insect pests." />
                </div>
            </div>

            <div>
                <h2 className="py-10 text-3xl font-bold text-center text-black">
                    Flora
                </h2>
                <div className="grid sm:grid-cols-4 gap-8">
                    <Image imageName="White Spruce.jpeg" description="Description for White Spruce" />
                    <Image imageName="Wild Carrot.jpeg" description="Description for Wild Carrot" />
                    <Image imageName="Pink Lady's Slipper.jpg" description="Description for Pink Lady's Slipper" />
                    <Image imageName="Bluebead Lily.jpg" description="Description for Bluebead Lily" />
                    <Image imageName="Bluebead Lily.jpg" description="Description for Bluebead Lily" />
                    <Image imageName="Bluebead Lily.jpg" description="Description for Bluebead Lily" />
                    <Image imageName="Bluebead Lily.jpg" description="Description for Bluebead Lily" />
                    <Image imageName="Bluebead Lily.jpg" description="Description for Bluebead Lily" />
                    <Image imageName="Bluebead Lily.jpg" description="Description for Bluebead Lily" />
                    <Image imageName="Bluebead Lily.jpg" description="Description for Bluebead Lily" />
                    <Image imageName="Bluebead Lily.jpg" description="Description for Bluebead Lily" />
                    <Image imageName="Bluebead Lily.jpg" description="Description for Bluebead Lily" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
