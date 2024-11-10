"use client";

import { sendEmail } from "@/actions/sendEmail";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Form() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (FormData: FormData) => {
    try {
      setLoading(true);
      new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
        sendEmail(FormData);
        setLoading(false);
        toast.success("Message Sent");
      });
    } catch (error) {
      toast.error("Message Not Sent");
    }
  };
  return (
    <>
      <title>Contact</title>

      <div className="px-6 lg:px-14 pt-4 lg:pt-0">
        <h1 className="text-lg font-thin">Contact Me</h1>
      </div>

      <form
        className="w-full px-6 lg:px-14 py-4 flex flex-col gap-2"
        action={handleSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="email"
          className="rounded-md border bg-clip-border border-gray-300 bg-black px-3 py-3 mt-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none "
          required
        />
        <textarea
          className="h-32 md:h-44 lg:h-44 rounded-md border bg-clip-border border-gray-300 bg-black px-3 py-2 mt-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none "
          placeholder="Your Message"
          name="message"
          required
        />

        {loading === true ? (
          <Button className="mt-3 flex justify-center items-center w-32 ">
            <Loader2 className="w-6 h-6 animate-spin" />
          </Button>
        ) : (
          <Button className="w-32 flex gap-3 mt-3">
            Submit <Send className="w-4 h-4" />
          </Button>
        )}
      </form>
    </>
  );
}
