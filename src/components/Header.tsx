"use client"; // Keep this! Needed for useState and useEffect

import { useState, useEffect } from "react";
// import { Menu } from "lucide-react"; // This import seems unused in the provided code
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Use the Link component from next/link

// These dropdown imports seem unused in the provided code. Remove if not needed.
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

interface Props {
  bookingPage: boolean;
}

export const Header = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { bookingPage } = props;

  // This useEffect hook handles client-side scroll detection, which is fine in a 'use client' component.
  useEffect(() => {
    const handleScroll = () => {
      // Only update state if the scroll status actually changes
      const currentScrollStatus = window.scrollY > 50;
      if (currentScrollStatus !== isScrolled) {
        setIsScrolled(currentScrollStatus);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true }); // Added passive option for performance
    // Initial check in case the page loads already scrolled
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Depend on isScrolled to potentially re-run if needed, though unlikely needed here. Added eslint disable comment as isScrolled might cause loops if directly included. Better to keep empty array if logic is stable based only on scroll Y.

  return (
    <>
      {bookingPage ? (
        // Variant for the booking page
        <header
          className={`flex fixed w-full z-50 bg-white py-1 ${
            // Combined static classes
            isScrolled ? "shadow-md" : "" // Conditionally add shadow
          } transition-shadow duration-300`} // Added transition for shadow
        >
          <div className="flex items-center w-full justify-between relative px-4 sm:px-6 lg:px-8">
            {" "}
            {/* Added relative positioning and padding */}
            {/* Use href instead of to for next/link */}
            <Link
              href="/"
              className="font-serif text-xl text-black absolute left-1/2 -translate-x-1/2"
            >
              Hacienda La Palma
            </Link>
            {/* Maybe add a placeholder or different element on the booking page if needed? */}
            <div className="ml-auto invisible">
              {" "}
              {/* Placeholder to maintain balance potentially */}
              <Button variant="header" aria-hidden="true">
                Book Now
              </Button>
            </div>
          </div>
        </header>
      ) : (
        // Variant for other pages
        <header
          className={`flex fixed w-full z-50 bg-white py-1 pr-1 ${
            // Combined static classes
            isScrolled ? "shadow-md" : "" // Conditionally add shadow
          } transition-all duration-300`} // Keep transition-all if more properties than shadow change
        >
          <div className="flex items-center w-full justify-between relative px-4 sm:px-6 lg:px-8">
            {" "}
            {/* Added relative positioning and padding */}
            {/* Use href instead of to for next/link */}
            <Link
              href="/"
              className="font-serif text-xl text-black absolute left-1/2 -translate-x-1/2"
            >
              Hacienda La Palma
            </Link>
            <div className="ml-auto">
              {/* Use href instead of to for next/link */}
              <Link href="/casita">
                <Button
                  variant={isScrolled ? "default" : "header"}
                  // Removed explicit class overriding variant: className=" px-6 rounded-md"
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </header>
      )}
      {/* The commented-out header seems redundant, removing it unless it served a specific purpose */}
    </>
  );
};

export default Header;
