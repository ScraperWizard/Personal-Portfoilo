"use client";
import React, { useState } from "react";
import HeaderText from "@/components/HeaderText";
import { emailContact } from "@/data/contacts";
import { FaPaperPlane } from "react-icons/fa";

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

      <form className="mt-10 flex flex-col w-[40%]">
        <input
          placeholder="Your email"
          type="email"
          autoComplete="off"
          className="h-14 rounded-lg border-black"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your message"
          className="h-53 my-3 border-black rounded-lg p-4 focus:border-black"
          onChange={(e) => setMessage(e.target.value)}
          autoComplete="off"
          maxLength={500}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group:hover:-translate-y-1" />
        </button>
      </form>
    </section>
  );
}
