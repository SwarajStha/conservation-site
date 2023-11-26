//Author: Kazi Istiak  A00452666
//This component is designed to display a collection of images and videos in a structured layout.
//It showcases images of fauna and flora with some functionality, allowing users to load more/ less images dynamically.

// Import necessary dependencies
import React, { useState } from "react";
import Image from "./image.jsx";
import Video from "./video.jsx";

// Gallery component definition
const Gallery = () => {
  // Array of image objects for Fauna
  const faunaImagesArray = [
    {
      imageName: "Merlin.png",
      description:
        "The Merlin is a small and agile falcon with a rapid, direct flight. It's known for its distinctive facial markings and is often found in open country.",
    },
    {
      imageName: "Mallard.jpg",
      description:
        "Mallards are dabbling ducks recognized by the male's glossy green head, white neck ring, and chestnut-brown chest. Females are mottled brown with an orange bill.",
    },
    {
      imageName: "Lady Beetles.jpg",
      description:
        "Ladybugs, also known as ladybirds, are small, round beetles with bright and distinct colors, often red or orange with black spots. They are beneficial predators, feeding on aphids and other garden pests.",
    },
    {
      imageName: "Bronze Ground Beetle.jpg",
      description:
        "Bronze Ground Beetles are predatory beetles with a metallic bronze appearance. They are beneficial in controlling insect pests.",
    },
    {
      imageName: "Osprey.jpg",
      description:
        "Ospreys are large, fish-eating raptors with a distinctive dark eye stripe. They are often seen near bodies of water, using their sharp talons to catch fish.",
    },
    {
      imageName: "White-tailed Deer.jpg",
      description:
        "White-tailed Deer are easily identified by their long, fluffy tails that are brown on top and white underneath. Bucks have antlers, and their coats vary in color",
    },
    {
      imageName: "Ants.jpg",
      description:
        "Ants are social insects that live in colonies. They have a distinct body structure with three segments: head, thorax, and abdomen. Ants are known for their organized and cooperative behavior.",
    },
    {
      imageName: "Butterfly.jpg",
      description:
        "A butterfly is a colorful and delicate insect with two large, often brightly colored wings covered with tiny scales. Butterflies are known for their graceful flight and are important pollinators in ecosystems.",
    },
    {
      imageName: "Greglasley.jpg",
      description:
        "These are insects with large, multifaceted eyes, long bodies, and two pairs of strong, transparent wings. They are skilled fliers and are often found near water sources.",
    },
    {
      imageName: "Grasshopper.jpg",
      description:
        "Grasshoppers are herbivorous insects with powerful hind legs adapted for jumping. They are often green or brown, allowing them to blend into grassy environments. Grasshoppers produce characteristic buzzing sounds.",
    },
    {
      imageName: "Common Eastern Bumble Bee.jpg",
      description:
        "These bees are known for their fuzzy appearance and are important pollinators. They have a distinctive black and yellow striped pattern.",
    },
    {
      imageName: "American Black Bear.jpg",
      description:
        "Black Bears are large mammals with a robust body, a short tail, and rounded ears. Despite their name, they can be brown, cinnamon, or black.",
    },
    {
      imageName: "American Red Squirrel.jpeg",
      description:
        " Red Squirrels are small, territorial rodents with a reddish-brown coat and a bushy tail. They are active and vocal, often chattering loudly.",
    },
    {
      imageName: "Barred Owl.jpg",
      description:
        "Barred Owls have a rounded face and dark eyes, with barred patterns on their feathers.",
    },
    {
      imageName: "Black-capped Chickadee.jpg",
      description:
        "Chickadees are small birds with a black cap and bib, white cheeks, and a gray back. They are known for their cheerful 'chick-a-dee-dee-dee' call.",
    },
    {
      imageName: "Common Garter Snake.jpg",
      description:
        "Garter Snakes are slender, with longitudinal stripes along their bodies. They are non-venomous and are commonly found in a variety of habitats.",
    },
    {
      imageName: "Green Frog.jpg",
      description:
        "Green Frogs are medium-sized frogs with bright green skin. They have prominent tympanic membranes behind their eyes and are often found near water.",
    },
    {
      imageName: "Japanese Beetle.jpg",
      description:
        "Japanese Beetles are metallic green and bronze beetles known for their distinctive feeding habits, damaging plants by skeletonizing leaves.",
    },
    {
      imageName: "Painted Turtle.jpg",
      description:
        "Painted Turtles have colorful markings on their shells and skin. They are commonly found basking on logs in ponds and are known for their striking appearance.",
    },
    {
      imageName: "Song Sparrow.jpg",
      description:
        "Song Sparrows have brown and streaked plumage with a central breast spot. They are known for their varied and melodious songs.",
    },
  ];

  // Array of image objects for Flora
  const floraImagesArray = [
    {
      imageName: "White Spruce.jpeg",
      description:
        "A majestic White Spruce tree with needle-like leaves, common in northern regions. The image likely captures the tree's tall, straight trunk and branches covered in short, green needles.",
    },
    {
      imageName: "Apple Tree.jpg",
      description:
        "The Apple Tree is a deciduous fruit tree producing crisp and succulent apples. Cultivated for its delicious fruit, the apple tree has cultural significance and is often associated with orchards, harvest, and the changing seasons.",
    },
    {
      imageName: "Bamboo.jpg",
      description:
        "Bamboo is a versatile and fast-growing plant with tall, slender stems. Known for its strength and flexibility, bamboo is used in various cultures for construction, art, and as a symbol of resilience and adaptability.",
    },
    {
      imageName: "Japaneese Maple.jpg",
      description:
        "The Japanese Maple is a deciduous tree known for its delicate and intricately lobed leaves. It displays a range of stunning colors, including red, orange, and green, making it a popular ornamental tree in gardens and landscapes.",
    },
    {
      imageName: "Cherry Blossom.jpeg",
      description:
        "The Cherry Blossom, or Sakura, is a deciduous tree celebrated for its enchanting pink or white flowers. These blossoms create a breathtaking spectacle in spring, symbolizing renewal and the transient nature of life in Japanese culture.",
    },
    {
      imageName: "Mangolia.jpg",
      description:
        "The Magnolia tree is characterized by its large, fragrant flowers and glossy evergreen leaves. With elegant, cup-shaped blooms, Magnolias add beauty and charm to gardens, and some species are renowned for their therapeutic properties.",
    },
    {
      imageName: "Wild Carrot.jpeg",
      description:
        "A close-up of the delicate and lacy flowers of Wild Carrot, also known as Queen Anne's Lace. The image may showcase the intricate, umbrella-shaped clusters of small white flowers.",
    },
    {
      imageName: "lily.jpeg",
      description:
        "A graceful and elegant Lily, a flowering plant known for its captivating beauty.",
    },
    {
      imageName: "Bluebead Lily.jpg",
      description:
        "A Bluebead Lily, featuring delicate white flowers and blue berries. This woodland plant is part of the lily family and is known for its unique blue bead-like fruits.",
    },
    {
      imageName: "sunflower.jpeg",
      description:
        "A vibrant Sunflower with its large, golden-yellow petals surrounding a dark central disk. Sunflowers are known for their cheerful appearance and are symbolic of warmth and positivity.",
    },
    {
      imageName: "maples.jpeg",
      description:
        " A group of Maple trees, likely showcasing their distinctive lobed leaves. Maples are known for their brilliant autumn foliage and are often associated with Canada.",
    },
    {
      imageName: "Bougainvillea.jpg",
      description:
        "A stunning Bougainvillea in full bloom, displaying its vibrant and colorful bracts. Bougainvillea is a tropical plant known for its eye-catching appearance and is often seen in warm climates.",
    },
    {
      imageName: "Pink Lady's Slipper.jpg",
      description:
        "Another image capturing the beauty of the Pink Lady's Slipper orchid, emphasizing its unique slipper-shaped pink or magenta flower.",
    },
    {
      imageName: "prickly pears.jpeg",
      description:
        "Prickly Pears, a type of cactus, showcasing their flat, paddle-shaped stems and colorful fruits. The fruits are often red or purple and covered in spines.",
    },
    {
      imageName: "yushania.jpeg",
      description:
        "Yushania, a type of bamboo, featuring tall and slender green stems. Bamboo is known for its versatility and is used for various purposes.",
    },
    {
      imageName: "spruce.jpeg",
      description:
        "A Spruce tree, likely with its characteristic evergreen needles. Spruce trees are common in northern climates and are valued for their timber.",
    },
  ];

  // Define the initial number of images to show and the increment value for Fauna
  const initialFaunaImagesToShow = 10;
  const incrementFauna = 5;

  // State to keep track of the number of Fauna images to show
  const [faunaImagesToShow, setFaunaImagesToShow] = useState(
    initialFaunaImagesToShow
  );

  // Function to handle "Load More" button click for Fauna
  const handleLoadMoreFauna = () => {
    setFaunaImagesToShow(faunaImagesToShow + incrementFauna);
  };

  // Function to handle "Show Less" button click for Fauna
  const handleShowLessFauna = () => {
    setFaunaImagesToShow(initialFaunaImagesToShow);
  };

  // Function to determine if "Show More" button for Fauna should be visible
  const isShowMoreFaunaVisible = faunaImagesToShow < faunaImagesArray.length;

  // Define the initial number of images to show and the increment value for Flora
  const initialFloraImagesToShow = 8;
  const incrementFlora = 4;

  // State to keep track of the number of Flora images to show
  const [floraImagesToShow, setFloraImagesToShow] = useState(
    initialFloraImagesToShow
  );

  // Function to handle "Load More" button click for Flora
  const handleLoadMoreFlora = () => {
    setFloraImagesToShow(floraImagesToShow + incrementFlora);
  };

  // Function to handle "Show Less" button click for Flora
  const handleShowLessFlora = () => {
    setFloraImagesToShow(initialFloraImagesToShow);
  };

  // Function to determine if "Show More" button for Flora should be visible
  const isShowMoreFloraVisible = floraImagesToShow < floraImagesArray.length;

  return (
    <div
      id="gallery"
      className="border w-full m-auto md:pl-20 p-4 py-16 items-center"
    >
      {/* Gallery Title */}
      <h1 className="py-4 text-4xl font-bold text-center text-black">
        GALLERY
      </h1>
      {/* Video Component */}
      <div className="items-center">
        <Video />
      </div>
      {/* Fauna Section */}
      <div>
        <h2 className="py-4 text-3xl font-bold text-center text-black">
          Fauna
        </h2>
        <div className="grid sm:grid-cols-5 gap-5">
          {faunaImagesArray.slice(0, faunaImagesToShow).map((image, index) => (
            <Image
              key={index}
              imageName={image.imageName}
              description={image.description}
            />
          ))}
        </div>
        {/* "Show More" and "Show Less" Buttons for Fauna */}
        <div className="flex justify-center mt-4">
          {isShowMoreFaunaVisible && (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={handleLoadMoreFauna}
            >
              Show More Fauna Images
            </button>
          )}
          {faunaImagesToShow > initialFaunaImagesToShow && (
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md ml-4"
              onClick={handleShowLessFauna}
            >
              Show Less Fauna Images
            </button>
          )}
        </div>
      </div>
      {/* Flora Section */}
      <div>
        <h2 className="py-10 text-3xl font-bold text-center text-black">
          Flora
        </h2>
        <div className="grid sm:grid-cols-4 gap-8">
          {floraImagesArray.slice(0, floraImagesToShow).map((image, index) => (
            <Image
              key={index}
              imageName={image.imageName}
              description={image.description}
            />
          ))}
        </div>
        {/* "Show More" and "Show Less" Buttons for Flora */}
        <div className="flex justify-center mt-4">
          {isShowMoreFloraVisible && (
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-md"
              onClick={handleLoadMoreFlora}
            >
              Show More Flora Images
            </button>
          )}
          {floraImagesToShow > initialFloraImagesToShow && (
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md ml-4"
              onClick={handleShowLessFlora}
            >
              Show Less Flora Images
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
