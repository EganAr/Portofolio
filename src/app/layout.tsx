import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import StarsCanvas from "./components/Stars";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Poppins({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-screen h-screen max-w-[100vw] max-h-[100vh] bg-gradient-to-r from-green-500 to-purple-800 flex justify-center items-center`}
      >
        <main className="overflow-hidden bg-black w-full max-w-[95vw] md:max-w-[90vw] lg:max-w-[90vw] h-full max-h-[90svh] text-white">
          <Navbar />
          <StarsCanvas />
          {children}
          <Footer />
          <Toaster position="bottom-right" />
        </main>
      </body>
    </html>
  );
}
