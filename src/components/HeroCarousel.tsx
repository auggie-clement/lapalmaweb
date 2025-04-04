"use client"; // Keep this! Needed for useState

import { useState } from "react"; // Removed useEffect as it was empty
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Import Link from next/link
import Image from "next/image"; // Import Image from next/image

const slides = [
  {
    image:
      "https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2022/05/Aerial-view-of-a-river-in-the-Costa-Rica-Monteverde-Cloud-forest.jpg",
    title: "Escape into the lush forests of Costa Rica",
    subtitle:
      "Hacienda La Palma is a resort nestled in the Talamanca’s range in the Central Valley of Costa Rica. Each stay is in a luxury villa with experiences like horseback riding, visiting a coffee farm, organic gardens, hiking, and more. After booking, your guide will help you create the perfect itinerary for your stay.",
    tag: "Escape into the lush forests of Costa Rica", // This tag isn't currently used in the JSX
  },
  // Add more slides here if needed for the carousel effect
];

export const HeroCarousel = () => {
  // useState requires this component to be a Client Component
  const [currentSlide, setCurrentSlide] = useState(0);

  // Removed empty useEffect hook

  return (
    <div className="relative h-screen mb-8">
      {" "}
      {/* Consider adjusting height if 'h-screen' causes layout issues */}
      {/* Content Container */}
      <div className="absolute inset-0 z-10 flex">
        {/* Text Content */}
        <div className="w-[35%] flex flex-col justify-center px-8 bg-white overflow-y-auto">
          {" "}
          {/* Added overflow-y-auto for smaller screens */}
          <div className="space-y-6 py-8">
            {" "}
            {/* Added padding */}
            <div className="w-14 h-px bg-gray-300 my-2"></div>
            <h1 className="text-3xl lg:text-4xl font-serif leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-gray-600 leading-relaxed font-sans text-sm pb-6">
              {slides[currentSlide].subtitle}
            </p>
            {/* Use next/link with href prop */}
            <Link href="/casita">
              <Button className="">Book Now</Button>
            </Link>
          </div>
        </div>

        {/* Image Container - Right Side */}
        <div className="w-[65%] relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100 z-0" : "opacity-0 -z-10" // Adjust z-index to ensure only visible image is interactive/seen
              }`}
            >
              {/* Use next/image for optimized images */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill // Use fill to cover the container div
                style={{ objectFit: "cover" }} // Use style prop for objectFit with fill
                priority={index === 0} // Prioritize loading the first image (or potentially the currentSlide image)
                sizes="(max-width: 768px) 100vw, 65vw" // Provide sizes information for responsiveness
              />
              {/* Mobile overlay - consider if still needed with potentially better image handling */}
              {/* <div className="absolute inset-0 bg-black/20 lg:hidden" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
