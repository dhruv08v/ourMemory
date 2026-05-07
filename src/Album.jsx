import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/image5.jpg";
import image6 from "./assets/image6.jpg";
import image7 from "./assets/image7.jpeg";
import image8 from "./assets/image8.jpg";

function Album() {
  const images = [
    { sno: 1, src: image1, msg: "We might stumble through mistake and let silence stretch between us like endless highways at midnight, but the invisible thread that ties your heartbeat to mine has never once thought of breaking." },
    { sno: 2, src: image2, msg: "Every morning feels incomplete until I remember the sound of your laugh, and every night becomes bearable only because the echo of your name is the last prayer my tired heart whispers before sleep." },
    { sno: 3, src: image3, msg: "I cannot promise you a version of me that never makes mistakes or never says the wrong thing in anger, but I can promise you a man who wakes up every single day and chooses your love over his pride." },
    { sno: 4, src: image4, msg: "Like two ancient trees that have learned to bend without breaking through every season the world throws at them, we have survived our worst days not because we were perfect but because we refused to let go." },
    { sno: 5, src: image5, msg: "If you ever feel like the weight of us is too heavy and your heart wants to walk away into quieter places, just remember I fought the whole universe to find you and I’m not ready to lose you yet." },
    { sno: 6, src: image6, msg: "Our love was never made in grand gestures filmed for the world to see and applaud, it was made in shared headphones on late bus rides, in “text me when you’re home”, and in knowing how you like your coffee when the world feels cold." },
    { sno: 7, src: image7, msg: "The path ahead will not always be kind and we will trip over stones we didn’t see coming in the dark, but I would rather walk every hard mile with your hand in mine than run an easy road alone." },
    { sno: 8, src: image8, msg: "When people ask me what forever is supposed to feel like in a world where everything ends too soon, I don’t give them definitions or poetry from old books, I just look at you and say this is it, this is my peace." },
  ];

  return (
    <div className="min-h-screen p-5 space-y-10 
      bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500">

      {images.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={item.sno}
            className={`flex flex-col md:flex-row items-center gap-6 
            ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            
            {/* Image */}
            <img
              src={item.src}
              alt=""
              className="w-full md:w-1/4 h-1/4 object-cover rounded-2xl shadow-2xl m left-8
                hover:scale-110
              "
            />

            {/* Text */}
            <div className="md:w-1/2 text-white text-center md:text-left">
              <p className="text-lg font-serif">
                {item.msg}
              </p>
            </div>

          </div>
        );
      })}
    </div>
  );
}

export default Album;