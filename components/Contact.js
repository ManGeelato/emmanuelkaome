import React from "react";
import Image from "next/image";
import contactImage from "../public/assets/4957160.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#0F07D2]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-blue-500 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-110 ease-in duration-300 cursor-pointer"
                  src={contactImage}
                  alt="contact"
                />
              </div>
              <div>
                <h2 className="py-2">Emmanuel Kaome</h2>
                <p>Full Stack Web Developer</p>
                <p className="py-4">
                  Available for freelance or full-time positions. Contact me
                  below and let's talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
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

          <div className="col-span-3 w-full h-auto shadow-xl shadow-blue-500 rounded-xl lg:p-4">
            <div className="p-4">
              <h2 className="py-4">Call or Email me directly</h2>
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-blue-400"
                      type="text"
                      placeholder="Emmanuel Kaome"
                      readonly="readonly"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-blue-400"
                      type="number"
                      placeholder="+27(0) 67 617 2593"
                      readonly="readonly"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-blue-400"
                    type="email"
                    placeholder="emmanuelkaome@protonmail.com / ekawome6@gmail.com"
                    readonly="readonly"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-blue-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#0F07D2]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
