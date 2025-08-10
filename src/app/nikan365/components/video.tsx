import React from "react";
import Image from "next/image";

const Video = () => {
  return (
    <div className="container max-w-[1004px]">
      <Image src="/images/video.jpg" layout="fill" alt="video" className="!relative !w-full !h-full lg:block hidden rounded-[31px]" />
      <Image src="/images/videoMobile.png" layout="fill" alt="video" className="!relative !w-full !h-full lg:hidden block" />
    </div>
  );
};

export default Video;