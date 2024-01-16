"use client";
import React, { useState } from "react";
import HeaderText from "@/components/HeaderText";
import { emailContact } from "@/data/contacts";
import { FaPaperPlane } from "react-icons/fa";
import { POST } from "./api/send/route";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section
      id="contact"
      className="bg-black flex items-center justify-center text-center flex-col"
    >
      <HeaderText text="Contact Me" />

      <div className="w-full flex items-center justify-center text-center">
        Contact me directly at&nbsp;
        <a className="underline" href={`mailto:${emailContact.link}`}>
          {emailContact.link}
        </a>
        &nbsp;or through this form.
      </div>

      <form
        className="mt-10 flex flex-col w-[40%]"
        action={() => {
          POST(
            JSON.stringify({
              email,
              message,
            })
          );
        }}
      >
        <input
          placeholder="Your email"
          type="email"
          autoComplete="off"
          className="h-14 rounded-lg text-black"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your message"
          className="h-53 my-3 border-black rounded-lg p-4 text-black"
          onChange={(e) => setMessage(e.target.value)}
          autoComplete="off"
          maxLength={500}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 rounded-full outline-none"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group:hover:-translate-y-1" />
        </button>
      </form>
    </section>
  );
}
