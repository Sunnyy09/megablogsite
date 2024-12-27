import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="w-full min-h-screen flex justify-center">
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
        <div className="relative z-10 h-full bg-black/20 text-center">
          <div className="flex flex-col items-center relative top-36 h-full text-center text-white">
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
      {/* featured-post */}
      <div className="absolute top-[550px] z-10 font-serif w-[70vw] bg-[#364037]">
        <div className="px-8 py-4 max-h-[60vh] w-full flex">
          <div className="w-1/2">
            <h2 className="text-left mb-6 text-2xl text-white font-bold ">
              Featured Post
            </h2>
            <div className="my-4">
              <img
                src="https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-[95%]"
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="h-full  pl-4 flex flex-col justify-center">
              <span className="text-sm text-gray-300 h-12">Dec 27, 2024</span>
              <Link className="hover:text-[#986c43]">
                <div className="space-y-4">
                  <h3 className="text-white text-3xl font-semibold hover:text-[#986c43]">
                    Blog Title
                  </h3>
                  <p className="text-gray-300 font-semibold text-md font-sans hover:text-[#986c43]">
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices your audience to
                    continue reading....
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Recent posts */}
      </div>
    </div>
  );
}

export default Main;
