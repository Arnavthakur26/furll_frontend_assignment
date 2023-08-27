"use client";
import React from "react";
import bannerImage from "../public/VibeCard-NightFlea12.webp";
import Image from "next/image";
import shareIcon from "../public/share_icon.svg";
import { RWebShare } from "react-web-share";

const Banner = () => {
  return (
    <div className="h-44 overflow-hidden relative ">
      <Image src={bannerImage} alt="banner" width={400} height={300} />
      <div className="absolute bottom-4 banner-content w-full flex  items-center">
        <div className=" flex flex-col items-center w-full relative left-4">
          <h1 className="text-2xl font-light italic text-center tracking-wider text-white drop-shadow-xl mt-20 ">
            #NightFlea
          </h1>
          <button className="bg-[#7e59e7] mt-2 text-white w-1/6 text-[0.65rem] py-1.5 px-3 rounded-full">
            Follow
          </button>
        </div>
        <RWebShare
          data={{
            text: "Furll Store",
            url: "http://localhost:3000/",
            title: "Visit Furrl Store",
          }}
        >
          <div className="share-icon bg-[#4b5563] rounded-full p-2 self-end mr-2">
            <Image src={shareIcon} alt="share" width={25} height={25} />
          </div>
        </RWebShare>
      </div>
    </div>
  );
};

export default Banner;
