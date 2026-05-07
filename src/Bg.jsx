import "./App.css";
import song from "./music/song.mp3";
import memory from "./video/memory.mp4"
import { useRef, useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Bg() {

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const startMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.2; // 🔉 low volume
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
      window.removeEventListener("click", startMusic);
    };

    window.addEventListener("click", startMusic);
    return () => window.removeEventListener("click", startMusic);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-5 
    bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500">

      {/* 🎵 AUDIO (ONLY ONE) */}
      <audio ref={audioRef} loop>
        <source src={song} type="audio/mp3" />
      </audio>

      {/* 🎧 BUTTON (ONLY ONE) */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 
        bg-white/20 backdrop-blur-lg text-white 
        px-4 py-2 rounded-full shadow-lg 
        hover:scale-110 transition"
      >
        {isPlaying ? "⏸ Pause" : "▶ Play"}
      </button>

      <div className="text-center text-white max-w-2xl 
      bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">

        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          For You 💌
        </h1>

        <p className="text-sm md:text-lg leading-relaxed mb-5">
          I know things haven’t been perfect, but every moment we shared
          still means everything to me. This is just a small way of saying
          I’m sorry… and I truly care.
        </p>

        {/* Typing */}
        <div className="mt-6 mb-6 text-base md:text-lg">
          <TypeAnimation
            sequence={[
              "I never meant to hurt you...",
              2000,
              "You mean everything to me...",
              2000,
              "Please don’t let this bond end...",
              2000,
            ]}
            speed={50}
            repeat={0}
          />
        </div>

        {/* Video */}
        <video
          controls
          className="w-full max-w-md mx-auto rounded-xl shadow-lg"
        >
          <source src={memory} type="video/mp4" />
        </video>

      </div>
    </div>
  );
}