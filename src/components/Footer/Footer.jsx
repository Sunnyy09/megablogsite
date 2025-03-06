import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-[#364037] border border-t-2 border-t-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <h1 className="font-pacifico text-white">QuillQuest</h1>
              </div>
              <div>
                <p className="text-sm text-[#fff]">
                  &copy; Copyright 2025. All Rights Reserved by QuillQuest.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-lg font-semibold uppercase text-[#fff]">
                Company
              </h3>
              <ul className="p-0">
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-400 hover:text-[#fff] hover:underline"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-400 hover:text-[#fff] hover:underline"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium  text-gray-400 hover:text-[#fff] hover:underline"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium  text-gray-400 hover:text-[#fff] hover:underline"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-lg font-semibold uppercase text-[#fff]">
                Support
              </h3>
              <ul className="p-0">
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium  text-gray-400 hover:text-[#fff] hover:underline"
                    to="/signup"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium  text-gray-400 hover:text-[#fff] hover:underline"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium  text-gray-400 hover:text-[#fff] hover:underline"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium  text-gray-400 hover:text-[#fff] hover:underline"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-lg font-semibold uppercase text-[#fff]">
                Legals
              </h3>
              <ul className="p-0">
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium  text-gray-400 hover:text-[#fff] hover:underline"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium  text-gray-400 hover:text-[#fff] hover:underline"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium  text-gray-400 hover:text-[#fff] hover:underline"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
