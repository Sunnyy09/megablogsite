import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source
          src="https://video.wixstatic.com/video/375882_9f1a8e8b364946f38b7eb05436e76503/1080p/mp4/file.mp4"
          type="video/mp4"
        />
      </video>
      {/* Overlay Content */}
      <div className="relative z-10 h-full bg-black/50">
        <div className="flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Site
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Experience the best of creativity and innovation.
          </p>
          <Link
            to="/about"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
