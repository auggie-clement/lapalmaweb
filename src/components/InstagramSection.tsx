import { Button } from "./ui/button";
import { CSSProperties } from "react";

const InstagramSection = () => {
  const styles: Record<string, CSSProperties> = {
    section: {
      padding: "20px",
      textAlign: "center",
      boxSizing: "border-box", // includes padding in width calculations
    },
    images: {
      display: "flex",
      gap: "10px",
      width: "100%", // parent full width
      padding: "20px 50px", // 20px top/bottom, 50px on left/right
      boxSizing: "border-box",
      justifyContent: "space-between", // images align with padded edges
    },
    image: {
      // Available inner width: 100% - 100px (50px left + 50px right)
      // Subtract 3 gaps (3 * 10px = 30px): 100% - 130px available for images
      // Each image gets equal width: (100% - 130px) / 4
      width: "calc((100% - 130px) / 4)",
      aspectRatio: "1", // forces a square aspect ratio
      objectFit: "cover", // ensures the image fills the square without distortion
      display: "block",
    },
    button: {
      backgroundColor: "#d4af37",
      color: "white",
      padding: "10px 20px",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
    },
    icon: {
      width: "1em",
      height: "1em",
      display: "block",
      fill: "currentColor", // makes sure the icon uses the button's text color
    },
  };

  return (
    <div style={styles.section}>
      <h2>Hacienda La Palma On Instagram</h2>
      <div className="w-24 h-px bg-gray-300 mx-auto my-4"></div>
      <p className="text-sm text-gray-500">
        Share your photos with #AlwaysAuberge
      </p>
      <div style={styles.images}>
        <img
          style={styles.image}
          src="https://www.islands.com/img/gallery/this-majestic-costa-rica-waterfall-is-worth-chasing-and-swimming-in/l-intro-1727285511.jpg"
          alt="Instagram Image 1"
        />
        <img
          style={styles.image}
          src="https://www.islands.com/img/gallery/this-majestic-costa-rica-waterfall-is-worth-chasing-and-swimming-in/l-intro-1727285511.jpg"
          alt="Instagram Image 2"
        />
        <img
          style={styles.image}
          src="https://www.islands.com/img/gallery/this-majestic-costa-rica-waterfall-is-worth-chasing-and-swimming-in/l-intro-1727285511.jpg"
          alt="Instagram Image 3"
        />
        <img
          style={styles.image}
          src="https://www.islands.com/img/gallery/this-majestic-costa-rica-waterfall-is-worth-chasing-and-swimming-in/l-intro-1727285511.jpg"
          alt="Instagram Image 4"
        />
      </div>
      <div>
        <Button>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </span>
          FOLLOW @haciendalapalma
        </Button>
      </div>
      {/* <p>Guests Images: Terms & Conditions</p> */}
    </div>
  );
};

export default InstagramSection;
