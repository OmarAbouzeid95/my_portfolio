"use client";
import { Poppins } from "next/font/google";
import React, { useState, useEffect, useRef } from "react";
import HamburgerIcon from "@/components/HamburgerIcon";
import OverlayNav from "@/components/OverlayNav";
import Navbar from "@/components/Navbar";
import clsx from "clsx";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  useEffect(() => {
    if (showOverlay) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showOverlay]);

  return (
    <html lang="en">
      <body className={clsx(poppins.className, "bg-dark")}>
        <header className="relative lg:flex lg:justify-end lg:items-center lg:max-w-4xl lg:mx-auto">
          <HamburgerIcon setShowOverlay={setShowOverlay} />
          <Navbar />
        </header>
        <main
          className={clsx("relative min-h-screen text-white overflow-hidden")}>
          {showOverlay && (
            <div className="fixed inset-0 z-30 animate-fadeIn bg-black bg-opacity-20">
              <OverlayNav setShowOverlay={setShowOverlay} />
            </div>
          )}
          <section className={clsx(showOverlay && "blur-lg animate-fadeIn")}>
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
