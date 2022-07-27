import React from "react";
import Image from "next/image";
import Link from "next/link";
import restaurantImage from "../public/assets/projects/restaurant.PNG";
import { RiRadioButtonFill } from "react-icons/ri";

const restaurant = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={restaurantImage}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Locos Pollos</h2>
          <h3>React.js /SASS /Firebase /Free Meal API</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p>
            This web application is built using React.js, SASS and Free Meal
            backend API. Users can search their favourite meals and random
            recipes. This application is ideal for restaurants that want to
            penetrate fully into the market using technology. I hosted this application on firebase
          </p>
          <button className="px-8 py-2 mt-4 mr-8"><Link href="https://los-pollos-dc6d3.web.app/">Live Project</Link></button>
          <button className="px-8 py-2 mt-4"><Link href="https://github.com/ManGeelato/ReactRestaurantApplication">Code</Link></button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-blue-500 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React.js
              </p>
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SASS
              </p>
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase Database
              </p>
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Free Meal API
              </p>
            </div>
          </div>
        </div>
        <Link href="/">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default restaurant;
