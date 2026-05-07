import { useState } from "react";
import img1 from "./assets/image1.jpg";
import img2 from "./assets/image2.jpg";
import img3 from "./assets/image3.jpg";
import img4 from "./assets/image4.jpg";
import img5 from "./assets/image5.jpg";
import img6 from "./assets/image6.jpg";
import img7 from "./assets/image7.jpeg";
import img8 from "./assets/image8.jpg";

export default function SpreadCards() {
  const [hover, setHover] = useState(false);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const middle = (images.length - 1) / 2;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
    bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-5">

      {/* 📝 HEADING */}
      <h1 className="text-white text-center text-lg md:text-2xl font-semibold mb-10 max-w-2xl">
        THERE IS OUR SOME MEMORY WHICH WE HAVE CAPTURE INTO OUR PHONE AND OUR LIFE
      </h1>

      {/* 🎴 CARD SECTION */}
      <div
        className="relative w-64 h-40"   /* 🔥 smaller size */
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {images.map((img, index) => {
          const offset = index - middle;

          const spread = hover ? offset * 100 : 0;  // 🔥 smaller spread
          const rotate = hover ? offset * 10 : offset * 2;

          return (
            <div
              key={index}
              className="absolute w-44 h-60 rounded-xl shadow-xl 
              overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                left: "50%",
                transform: `translateX(calc(-50% + ${spread}px)) rotate(${rotate}deg)`,
                zIndex: images.length - Math.abs(offset),
              }}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

    </div>
  );
}