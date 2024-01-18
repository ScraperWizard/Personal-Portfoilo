import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiDownload } from 'react-icons/bi';
import { IconType } from 'react-icons';
import { ParticlesContainer } from '@/components/ParticlesContainer';
import ProfilePicture from '@/public/Abdulrahman_Photo.png';
import { contacts } from '@/data/contacts';

export default function Hero() {
  return (
    <>
      <section className="header fixed w-full z-30">
        <div className="header absolute w-full z-30 flex items-center px-22 xl:px-2 xl:h-[90px] select-none bg-black">
          <div className="name-like-logo container mx-auto">
            <p className="text-3xl font-sora">
              <strong>Abdulrahman</strong> Alali
              <strong style={{ color: "	#005b96", fontSize: "50px" }}>.</strong>
            </p>
          </div>

          <div className="social-media flex space-x-4">
            {contacts?.map((contact) => {
              const IconComponent: IconType | undefined = contact.icon;
              return IconComponent ? (
                <div key={contact.name} className="social-media-icon">
                  <Link href={contact.link} target="_blank">
                    <IconComponent />
                  </Link>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-t bg-black">
        <div className="flex items-center h-screen ml-72 -translate-y-50 z-30">
          <div className="body-text text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto z-20">
            <h1 className="h1 text-5xl font-bold mb-4 leading-relaxed select-none">
              Full-Stack <br />{" "}
              <span className="text-blue-500">Web Developer</span>
            </h1>
            <p className="profile-description max-w-2xl xl:max-w-sl mx-auto xl:mx-0 mb-10 xl:mb-16 text-sm font-light select-none">
              I am a dedicated full-stack developer, my focus is on creating
              innovative solutions that streamline and enhance our daily lives.
              I specialize in building applications that automate tasks.
            </p>
            <div className="container flex">
              <a href={"/CV.pdf"} download>
                <div className="bg-blue-500 rounded px-4 py-2 flex items-center">
                  <span className="relative text-white mr-2">Resume</span>
                  <BiDownload className="relative text-white" />
                </div>
              </a>
              <button className="group relative overflow-hidden px-4 py-2 text-blue-500 rounded">
                <span className="absolute bg-blue-500 transform"></span>
                <span className="relative bg-blue-500 text-white rounded px-4 py-2">
                  {"See all projects ->"}
                </span>
              </button>
            </div>
          </div>
          <div className="w-80 h-80 aspect-square rounded-full shadow-lg z-30 mt-24 ml-48">
            <Image
              src={ProfilePicture}
              alt="Profile Picture"
              width={500}
              height={500}
              className="object-cover object-top w-full h-full rounded-full shadow-lg"
            ></Image>
          </div>
          <ParticlesContainer />
        </div>
      </section>
    </>
  );
}
