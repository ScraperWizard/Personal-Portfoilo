import React from "react";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import ProfilePicture from "@/public/Abdulrahman_Photo.png";

export default function Hero() {
  return (
    <>
      <section className="bg-gradient-to-t bg-black">
        <div className="xl:flex xl:items-center xl:ml-72 pt-32 xl:pt-0 xl:-translate-y-12 z-30 xl:h-screen">
          <div className="body-text text-center flex flex-col justify-center xl:pt-40 xl:text-left container mx-auto z-20">
            <h1 className="h1 text-5xl font-bold mb-4 leading-relaxed select-none">
              Full-Stack <br />{" "}
              <span className="text-blue-500">Web Developer</span>
            </h1>
            <p className="profile-description w-[22rem] xl:w-[44rem] xl:max-w-sl mx-auto xl:mx-0 mb-10 xl:mb-16 font-light select-none">
              I am a dedicated full-stack developer, my focus is on creating
              innovative solutions that streamline and enhance our daily lives.
              I specialize in building applications that automate tasks.
            </p>
            <div className="container flex justify-center xl:justify-normal">
              <a href={"/CV.pdf"} download>
                <button className="roup relative overflow-hidden px-4 py-2 text-blue-500 rounded flex items-center bg-blue-500">
                  <span className="relative text-white mr-2">Resume</span>
                  <BiDownload className="relative text-white" fontSize={14} />
                </button>
              </a>

              <button className="group relative overflow-hidden px-4 text-blue-500 rounded">
                <span className="relative bg-blue-500 text-white rounded px-4 py-[0.63rem]">
                  {"See all projects ->"}
                </span>
              </button>
            </div>
          </div>
          <div className="w-full xl:w-auto flex justify-center items-center">
            <div className="w-60 h-60 xl:w-80 xl:h-80 aspect-square rounded-full shadow-xl z-30 mt-24 xl:mr-48 mb-[4.5rem] xl:translate-y-12">
              <Image
                src={ProfilePicture}
                alt="Profile Picture"
                width={500}
                height={500}
                className="object-cover object-top w-full h-full rounded-full shadow-lg"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
