import { Metadata } from "next";
import VideoPlayer from "./components/VideoPlayer";

export const metadata: Metadata = {
  title: "کترینگ نیکان",
  robots: {
    index: false,
    follow: false,
  },
};

const VIDEO_SRC =
  "https://api.nikan.hospital/storage/nikancatering/Nikancatering.mp4";

const Page = () => {
  return (
    <main className="bg-white px-5 py-10 lg:px-0 lg:py-20">
      <div className="container mx-auto max-w-[1125px]">
        <VideoPlayer src={VIDEO_SRC} />
      </div>
    </main>
  );
};

export default Page;
