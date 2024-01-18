"use client";
import React, { useState } from "react";
import HeaderText from "@/components/HeaderText";
import { emailContact } from "@/data/contacts";
import { FaPaperPlane } from "react-icons/fa";
import { FormEvent } from 'react'

export default function Contact() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch("/api/mail", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: event.currentTarget.email.value,
        message: event.currentTarget.message.value,
      }),
    });
  }

  return (
    <section
      id="contact"
      className="bg-black flex items-center justify-center text-center flex-col"
    >
      <HeaderText text="Contact Me" />

      <div className="w-full hidden lg:block lg:mb-10 items-center justify-center text-center">
        Contact me directly at&nbsp;
        <a className="underline" href={`mailto:${emailContact.link}`}>
          {emailContact.link}
        </a>
        &nbsp;or through this form.
      </div>

      <form className="flex flex-col w-full px-4 max-w-[44rem]" onSubmit={onSubmit}>
        <input
          placeholder="Your email"
          type="email"
          name="email"
          autoComplete="off"
          className="h-14 rounded-lg text-black"
        />
        <textarea
          placeholder="Your message"
          name="message"
          className="h-53 my-3 border-black rounded-lg p-4 text-black"
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
