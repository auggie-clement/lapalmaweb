import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const IncludedStay = () => {
  const amenities = [
    {
      title: "TRANSPORTATION",
      description: "",
    },
    {
      title: "FOOD",
      description:
        "Enjoy a Authentic Costa Rican breakfast paired with La Palma Coffee, served each morning in the comfort of your villa.",
    },
    {
      title: "WELLNESS",
      description: "Daily adventure and wellness programming",
    },
    {
      title: "ADVENTURE",
      description: "Access to various hiking trails in our secondary forest",
    },
    {
      title: "PERSONALIZED STAYS",
      description: "",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container flex flex-col md:flex-row items-start gap-12">
        <div className="w-[50%] relative">
          <img
            src="https://www.islands.com/img/gallery/this-majestic-costa-rica-waterfall-is-worth-chasing-and-swimming-in/l-intro-1727285511.jpg"
            alt="Scenic view of the property"
            className="w-full h-[500px] object-cover"
          />
        </div>
        {/* <div className="w-[65%] relative">
          <div
            className={`absolute inset-0 transition-opacity duration-1000 opacity-0 `}
          >
            <img
              src="https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2022/05/Aerial-view-of-a-river-in-the-Costa-Rica-Monteverde-Cloud-forest.jpg"
              alt="Scenic view of the property"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 lg:hidden" />
          </div>
        </div> */}

        <div className="w-full md:w-2/3 text-left">
          <h2 className="font-serif mb-4">INCLUDED IN YOUR STAY</h2>
          <div className="w-16 h-px bg-gray-300 mb-8"></div>

          <p className="text-gray-700 mb-12">
            A trip to Hacienda La Palma is so much more than a simple getaway.
            Let us create the perfect retreat experience, uniquely tailored to
            you – and all stays are inclusive of:
          </p>

          <div className="space-y-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-6 last:border-0"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-serif">{amenity.title}</h3>
                    <span className="text-gray-500">|</span>
                    <p className="text-gray-700">{amenity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border-b border-gray-200  last:border-0" />
          <div className=" mt-6 space-y-2">
            <p className="text-gray-500 italic">
              There is no Resort Fee, but there is a Service Charge of 10%
            </p>
            <div className="py-3 space-y-2">
              <Link to="/casita">
                <Button className="">Start Planning</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncludedStay;
