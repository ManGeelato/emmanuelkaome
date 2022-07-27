import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillPersonLinesFill } from 'react-icons/bs';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#0F07D2]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I have spent the last 3 years horning my software development
            skills. I started only with HTML5. I got fascinated when I realised
            almost every page we browse on Google has got HTML backbone in it.
            This made me push hard into knowing more languages and the rest
            followed. I now possess knowledge of HTML5, CSS3, Javascript,
            React.js, Node.js, Express.js, BootstrapV5, TailwindCSS, Google
            Material UI, Mongo DB and many more.
          </p>
          <p className="py-2 text-gray-600">
            My strong point is front-end development and I have been working on
            personal websites and e-commerce sites. Currently I am learning
            Vue.js framework.
          </p>
          {/* <p className="py-2 text-gray-600 underline cursor-pointer">
            Projects
          </p> */}
           {/* <div className="rounded-full shadow-lg shadow-blue-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <link
                to={}
              >
                <BsFillPersonLinesFill />
              </link>
            </div> */}
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-blue-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration">
          <Image
            src="/../public/assets/3411109.jpg"
            alt="Logo"
            width="600"
            height="500"
            className="rounded-xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
