import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full min-h-screen flex flex-wrap items-center justify-center">
      <div className="w-full flex flex-col items-center min-h-[700px] bg-[#986c43] ">
        <div className="text-center my-16">
          <h1 className="text-[#364037] text-3xl font-serif font-bold">
            About Me
          </h1>
        </div>
        <div className="w-4/5">
          <div className=" max-h-[480px] border border-black/50 flex">
            <div className="left w-1/2"></div>
            <div className="w-3/5 h-full p-20 bg-[#986c43]">
              <div className="mx-8 w-4/5">
                <p className="text-[#ffffff] text-md">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                  laudantium nulla cum reprehenderit in, odio quis aspernatur a
                  molestias ab minima. Eos magnam adipisci corrupti aliquam id
                  molestias aperiam? In, veniam aspernatur expedita quos
                  molestiae cum dolore dignissimos unde tenetur quisquam facilis
                  nihil quas ut possimus porro consectetur quaerat nesciunt.
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
      <div className="h-36 bg-white w-full">
        <div className="w-full h-full flex justify-center items-center ">
          <h2 className="text-2xl text-[#364037] font-semibold">
            Click edit and create your own amazing website
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
