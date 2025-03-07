import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full min-h-screen flex flex-wrap items-center justify-center">
      <div className="w-full flex flex-col items-center min-h-[900px] bg-[#986c43] ">
        <div className="text-center my-16">
          <h1 className="text-[#364037] text-3xl font-serif font-bold">
            About Me
          </h1>
        </div>
        <div className="w-4/5">
          <div className="lg:max-h-[65vh] lg:mb-0 mb-16 border border-black/50 flex lg:flex-row flex-col">
            <div className="left lg:w-2/5 w-full">
              <img
                src="https://images.unsplash.com/photo-1471400974796-1c823d00a96f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="lg:h-[100%] h-[550px] w-full"
              />
            </div>
            <div className="lg:w-3/5 w-full h-full md:p-16 p-6 bg-[#986c43]">
              <div className="w-full flex flex-col sm:items-start items-center">
                <p className="text-[#ffffff] text-md">
                  Welcome to QuillQuest, where words come to life and stories
                  unfold. This is more than just a blog—it's a journey through
                  ideas, insights, and creativity. Whether you're here for
                  thought-provoking articles, in-depth explorations, or simple
                  musings, QuillQuest is a space designed to inspire, inform,
                  and ignite curiosity. At QuillQuest, we believe in the power
                  of storytelling, the beauty of shared knowledge, and the magic
                  that happens when creativity meets expression. Join us on this
                  journey as we explore new perspectives, one word at a time.
                  Let the quest begin!
                </p>
                <div className="mt-12">
                  <Link
                    to="/"
                    className="mx-auto bg-[#364037] text-white px-4 py-3 font-serif"
                  >
                    Explore Our Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-36 bg-white w-full sm:mx-0 mx-4">
        <div className="w-full h-full flex justify-center items-center ">
          <h2 className="text-2xl text-[#364037] font-semibold text-center sm:tracking-widest">
            Click edit and create your own amazing website
          </h2>
        </div>
      </div>
      <div className="flex justify-center bg-[#986C43]">
        <div className="w-4/5 px-8 py-16">
          <hr className="h-1 bg-white" />
          <p className="text-white text-xl font-rubik tracking-widest">
            We are passionate about creating a space where curiosity thrives and
            meaningful conversations take shape. Each article is crafted with
            the intent to spark ideas, challenge perspectives, and encourage
            lifelong learning. Whether you’re looking for insightful opinions,
            practical advice, or just a fresh take on everyday topics,
            QuillQuest is your go-to destination. We also value community and
            engagement. Your thoughts, feedback, and stories matter to us, and
            we invite you to be part of the conversation. Feel free to share
            your views, suggest topics, or simply connect with like-minded
            readers who share your interests. At QuillQuest, every post is a new
            chapter, and every reader is a part of our ever-growing narrative.
            Thank you for being here—let’s embark on this adventure together!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
