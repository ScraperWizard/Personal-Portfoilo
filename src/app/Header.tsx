import { contacts } from "@/data/contacts";
import { IconType } from "react-icons";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="header relative lg:fixed w-full z-30">
        <div className="header absolute w-full z-30 flex items-center px-22 h-[43px] select-none bg-black">
          <div className="name-like-logo container mx-auto">
            <p className="text-3xl font-sora">
              <strong>Abdulrahman</strong> Alali
              <strong style={{ color: "	#005b96", fontSize: "50px" }}>.</strong>
            </p>
          </div>

          <div className="social-media flex space-x-4 h-full justify-center items-center mr-2">
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
      </div>
    </>
  );
}
