import React from "react";
import Image from "next/image";
import Link from "next/link";
import carsImage from "../public/assets/projects/cars.PNG";
import { RiRadioButtonFill } from "react-icons/ri";

const cars = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={carsImage}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">U-Cars</h2>
          <h3>
            React.js /Node.js /Google Material UI /Javascript /Styled
            Components /MongoDB{" "}
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p>
            This web application is built using React.js, Node.js, Google
            Material UI, Javascript, Styled Components and MongoDB. This
            application solidifies CRUD operations altogether. A user can add a
            new car with an image, edit and delete the car. All this information
            integrates well with the backend API that was done using pure Node.js,
            Express.js and MongoDB then for the frontend I used React.js, Google
            Material UI and styled components. I hosted the frontend of this application on Netlify then backend API on Heroku
          </p>
          <button className="px-8 py-2 mt-4 mr-8"><Link href="https://candid-naiad-23d515.netlify.app/">Live Project</Link></button>
          <button className="px-8 py-2 mt-4"><Link href="https://github.com/ManGeelato/u-cars-client">Code</Link></button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-blue-500 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express.js
              </p>
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React.js
              </p>
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google Material UI
              </p>
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Netlify and Heroku
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

export default cars;
