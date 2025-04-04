"use client";
import React, { useState } from "react";
import PropertyStats from "@/components/PropertyStats";
import { Share2, Heart } from "lucide-react";
import { Header } from "@/components/Header";
import LodgifyCalendar from "@/components/LodgifyCalendar";
// import PropertyStats from "../components/PropertyStats";

export default function Casita() {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <p>
            Welcome to Wander Islamorada Beach, a luxurious three-story,
            six-bedroom beachfront property. Enjoy three living rooms, a social
            room, a beachfront terrace, a third-story oceanfront terrace, and a
            private pool. Nestled in a beautiful cove with a rare natural beach,
            this elegant home includes two paddle boards and two kayaks for your
            enjoyment.
          </p>
        );
      // Add more cases for other tabs
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header bookingPage={true} />

      {/* Hero Section */}
      <div className="relative w-full" style={{ height: "700px" }}>
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=2340&q=80"
          alt="Luxury beach house"
          className="object-cover w-full h-full"
        />
        {/* Gradient overlay for fade effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>

      {/* Main content wrapper: significantly increase negative margin to bring it closer to the header */}
      <div className="relative max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[38rem]">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left column: big image + property content */}
          <div className="md:w-3/4 flex flex-col">
            {/* Overlapping large image with increased width */}
            <img
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=2340&q=80"
              alt="House exterior"
              className="object-cover rounded-lg shadow-xl"
              style={{ width: "160%", height: "450px" }}
            />

            {/* Property content directly below large image */}
            <div className="mt-8">
              <p className="text-md text-gray-500 mb-4">
                Perez Zeledon, Costa Rica
              </p>
              <h1 className="text-6xl font-bold mb-4">Casa La Palma</h1>
              <PropertyStats
                bedrooms={2}
                bathrooms={2.5}
                beds={3}
                guests={6}
                sqft={3079}
              />
              {/* Tab Navigation */}
              <div className="flex space-x-4 mt-6 border-b">
                {[
                  "Overview",
                  "Amenities",
                  "Sleep",
                  "Work",
                  "Location",
                  "Pricing",
                  "Testimonials",
                ].map((tab) => (
                  <button
                    key={tab}
                    className={`py-2 px-4 ${
                      activeTab === tab ? "border-b-2 border-black" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {/* Tab Content */}
              <div className="mt-4">{renderContent()}</div>

              {/* Favorite + Share buttons */}
              <div className="flex items-center space-x-4 mt-8">
                <button className="flex bg-white items-center space-x-2 px-4 py-1 rounded-lg border hover:bg-gray-50">
                  <Heart size={14} />
                  <span>Favorite</span>
                </button>
                <button className="flex bg-white items-center space-x-2 px-4 py-1 rounded-lg border hover:bg-gray-50">
                  <Share2 size={14} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right column: two smaller images + DateSelector */}
          <div className="md:w-1/4 flex flex-col gap-6">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="House exterior"
              className="object-cover rounded-lg shadow-xl"
              style={{ width: "100%", height: "213px" }}
            />
            <a
              href="#"
              className="relative block"
              style={{ width: "100%", height: "213px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="House interior"
                className="object-cover rounded-lg shadow-xl"
                style={{ width: "100%", height: "213px" }}
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <button className="bg-white text-black px-4 py-1 rounded-lg shadow-lg">
                  See all photos
                </button>
              </div>
            </a>
            <LodgifyCalendar icalUrl="https://www.lodgify.com/bc75ff28-f439-4f73-ae40-ac18013e381e.ics?ext-info=true" />
          </div>
        </div>
      </div>
    </div>
  );
}
