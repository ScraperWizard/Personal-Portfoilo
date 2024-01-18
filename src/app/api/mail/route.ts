"use server";
import { EmailTemplate } from "../../../components/EmailStructure";
import { Resend } from "resend";
import * as React from "react";
import { emailContact } from "@/data/contacts";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await new Response(request.body).json();
  const { email, message } = formData;
  if (!email || message == "" || !message) {
    return Response.json({ error: "Missing email or message" });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `Personal Portfoilo <onboarding@resend.dev>`,
      to: emailContact?.link,
      subject: "Personal Portfoilo",
      react: EmailTemplate({ email, message }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
