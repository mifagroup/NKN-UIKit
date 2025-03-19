"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

const Intro = () => {
  const [show, setShow] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)"); // lg breakpoint in Tailwind CSS

  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [show]);

  const handleClick = () => {
    setShow(false);
  };

  return (
    <motion.div
      initial={{ y: -2000 }}
      animate={{ y: show ? 0 : -2000 }}
      transition={{ type: "spring", stiffness: 50, damping: 20, duration: 2 }}
      className={`fixed z-[9999] top-0 left-0 w-full h-[100vh]`}
    >
      <Image
        alt="intro"
        src={
          isMobile ? "/images/intro-mobile.png" : "/images/intro-desktop.png"
        }
        width={1920}
        height={1080}
        className="h-full w-full object-fill cursor-pointer"
        onClick={handleClick}
      />
    </motion.div>
  );
};

export default Intro;
