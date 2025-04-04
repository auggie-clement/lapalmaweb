"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  MapPin,
  Wine,
  Leaf,
  Flower,
  Mountain,
  Utensils,
  Bike,
} from "lucide-react";
import { useState } from "react";

const activities = [
  {
    title: "Wine & Dine Experience",
    duration: "14 hours",
    participants: 30,
    image: "/wine-dine.jpg",
  },
  {
    title: "Outdoor Adventures",
    duration: "8 hours",
    participants: 20,
    image: "/outdoor-adventure.jpg",
  },
  {
    title: "Wellness Retreats",
    duration: "6 hours",
    participants: 15,
    image: "/wellness.jpg",
  },
  {
    title: "Culinary Workshops",
    duration: "5 hours",
    participants: 10,
    image: "/culinary-workshop.jpg",
  },
  {
    title: "Cycling Tours",
    duration: "10 hours",
    participants: 25,
    image: "/cycling-tour.jpg",
  },
  {
    title: "Cultural Excursions",
    duration: "12 hours",
    participants: 18,
    image: "/cultural-excursion.jpg",
  },
  {
    title: "Mountain Hiking",
    duration: "7 hours",
    participants: 22,
    image: "/mountain-hiking.jpg",
  },
  {
    title: "Spa & Relaxation",
    duration: "4 hours",
    participants: 12,
    image: "/spa-relaxation.jpg",
  },
  {
    title: "Photography Walks",
    duration: "9 hours",
    participants: 16,
    image: "/photography-walks.jpg",
  },
  {
    title: "Bird Watching",
    duration: "5 hours",
    participants: 8,
    image: "/bird-watching.jpg",
  },
  {
    title: "Kayaking Adventure",
    duration: "6 hours",
    participants: 14,
    image: "/kayaking.jpg",
  },
  {
    title: "Horseback Riding",
    duration: "7 hours",
    participants: 10,
    image: "/horseback-riding.jpg",
  },
];

export default function Activities() {
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setShowAll(true);
  };

  const handleHide = () => {
    setShowAll(false);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Experiences Near the Hotel</h2>
        <p className="text-md text-gray-600 mb-8">
          Discover unforgettable activities just moments away.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAll ? activities : activities.slice(0, 9)).map(
            (activity, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4 text-left">
                  <div className="flex items-center gap-4 text-gray-600 text-sm mb-2">
                    <span className="flex items-center gap-1">
                      <span role="img" aria-label="time">
                        ⏳
                      </span>{" "}
                      {activity.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <span role="img" aria-label="participants">
                        👥
                      </span>{" "}
                      {activity.participants}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">
                    {activity.title}
                  </h3>
                  <Button variant="link" className="text-blue-600 text-sm">
                    Explore →
                  </Button>
                </CardContent>
              </motion.div>
            )
          )}
        </div>
        <div className="mt-6">
          {!showAll ? (
            <Button
              variant="outline"
              className="text-blue-600 border-blue-600"
              onClick={handleViewMore}
            >
              View More
            </Button>
          ) : (
            <Button
              variant="outline"
              className="text-red-600 border-red-600"
              onClick={handleHide}
            >
              Hide
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
