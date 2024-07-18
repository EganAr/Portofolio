"use client"

import { AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Form from "../components/Form";
import IntroPage from "../components/Intro";
import { useEffect, useState } from "react";

export default function Contact() {
  const [visible, isVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      isVisible(false);
    }, 1500);
  }, []);
  return (
    <>
      <title>Contact</title>

      <AnimatePresence>
        {visible && <IntroPage>contact</IntroPage>}
      </AnimatePresence>

      <Form />
      <Footer />
    </>
  );
}
