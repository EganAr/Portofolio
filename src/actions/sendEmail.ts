"use server";

import { validateString } from "@/lib/utils";
import { error } from "console";
import { Resend } from "resend";
import ContactEmail from "@/app/components/Contact-email";
import React from "react";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateString(email, 500)) {
    return error("Invalid email");
  }
  if (!validateString(message, 5000)) {
    return error("Invalid Message");
  }

  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "eganardenna45@gmail.com",
    subject: "Message from contact form",
    reply_to: email as string,
    react: React.createElement(ContactEmail, {
      message: message as string,
      email: email as string,
    }),
  });
};
