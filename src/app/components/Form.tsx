"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().min(2, { message: "Email is required" }).max(50),
  name: z.string().min(2, { message: "Name is required" }).max(50),
  message: z.string().min(2, { message: "Message is required" }).max(500),
});

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      Submit
    </Button>
  );
}

export default function Form() {
  const router = useRouter();
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3585da58-799a-409b-b292-bcc5bdebb8b8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      router.push("/success");
    } else {
      router.push("/failed");
    }
  }

  return (
    <>
      <div className="px-32 pt-12 lg:pt-0">
        <h1 className="text-xl">Contact Me</h1>
        <h1 className="border-b border-black max-w-[100px] pt-0.5 bg-clip-border bg-gradient-to-r from-green-400 to-purple-700"></h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full px-8 lg:px-32 py-5 flex flex-col gap-4"
      >
        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-black border bg-clip-border border-gray-300"
          required
        />
        <Input
          type="text"
          name="name"
          className="bg-black border bg-clip-border border-gray-300"
          placeholder="Your Name"
          required
        />
        <textarea
          name="message"
          className="h-32 rounded-md border border-input bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your Message"
          required
        />
        <SubmitButton />
      </form>
    </>
  );
}
