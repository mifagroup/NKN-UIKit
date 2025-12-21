"use client";

import { useEffect, useRef, useState } from "react";

export interface HeroMediaProps {
  image: string;
  mobileImage: string;
  title: string;
  isActive: boolean;
  priority?: boolean;
}

const isVideo = (url: string) => /\.(mp4|webm|ogg)$/i.test(url);

const HeroMedia = ({
  image,
  mobileImage,
  title,
  isActive,
  priority = false,
}: HeroMediaProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isActive) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  const mediaUrl = isMobile ? mobileImage : image;
  const isVideoMedia = isVideo(mediaUrl);

  if (isVideoMedia) {
    return (
      <video
        ref={videoRef}
        autoPlay={isActive}
        loop
        muted
        playsInline
        preload={isActive ? "auto" : "none"}
        className="lg:h-[83vh] h-[460px] w-full object-cover"
      >
        <source src={mediaUrl} type="video/mp4" />
      </video>
    );
  }

  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={mobileImage} />
      <source media="(min-width: 769px)" srcSet={image} />
      <img
        src={image}
        srcSet={`${mobileImage} 768w, ${image} 1920w`}
        sizes="(max-width: 768px) 100vw, 100vw"
        alt={title}
        loading={priority ? "eager" : "lazy"}
        className="lg:h-[83vh] h-[460px] w-full object-contain"
      />
    </picture>
  );
};

export default HeroMedia;
