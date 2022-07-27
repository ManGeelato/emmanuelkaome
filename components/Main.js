import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Coding Your Future
          </p>
          <h1 className="py-4 text-gray-700">
            Hello, I'm <span className="text-[#0F07D2]">Emmanuel Kaome</span>
          </h1>
          <h1 className="py-2 text-gray-700">Full Stack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a full stack web developer specializing in the most modern
            technologies to mention a few: HTML5, CSS3, Javascript, pure Node.js
            and MongoDB. I also have solid experience with Javascript frameworks
            / library mainly React.js, Typescript's Angular framework and CSS3's
            BootstrapV5 and TailwindCSS frameworks.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-blue-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link
                href="https://www.linkedin.com/in/emmanuel-kaome-0247b7224/"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-blue-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/ManGeelato" target="_blank">
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
