import { contacts } from "@/data/contacts";
import { Sora } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ParticlesContainer } from "@/components/ParticlesContainer";
import { LightSaber } from "@/components/LightSaber";
import ProfilePicture from "@/public/Abdulrahman_Photo.png";
import { BiDownload } from "react-icons/bi";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { IconType } from "react-icons";
import Footer from "./Footer";
import Aboutme from "./Aboutme";

export default function Home() {
  return (
    <main>
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
              Crafting Digital Experiences <br /> With{" "}
              <span className="text-blue-500">Web Development</span>
            </h1>
            <p className="profile-description max-w-2xl xl:max-w-sl mx-auto xl:mx-0 mb-10 xl:mb-16 text-sm font-light select-none">
              I am a dedicated full-stack developer, my focus is on creating
              innovative solutions that streamline and enhance our daily lives.
              I specialize in building applications that automate tasks.
            </p>
            <div className="container flex">
              <a
                href={"/CV.pdf"}
                download
                className="group relative overflow-hidden px-4 py-2 text-blue-500 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex items-center"
              >
                <span className="absolute inset-0 bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200"></span>
                <span className="relative group-hover:text-white mr-2">
                  Resume
                </span>
                <BiDownload className="relative group-hover:text-white" />
              </a>
              <button className="group relative overflow-hidden px-4 py-2 text-blue-500 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <span className="absolute inset-0 bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200"></span>
                <span className="relative group-hover:text-white">
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

      {/* About me */}
      <Aboutme />

      {/* Skills */}
      <Skills />

      {/* projects */}
      <Projects />

      {/* contact */}
      <Contact />

      {/* footer */}
      <Footer />
    </main>
  );
}
