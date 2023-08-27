import React from "react";
import Link from "next/link";

const DefaultPage = () => {
  return (
    <div className=" absolute w-full h-full text-white bg-[#7e59e7] z-999 flex justify-center items-center overflow-hidden">
      <div>
        <h1 className="text-9xl text-white">Furrl</h1>
        <div className="flex gap-4 text-4xl justify-center">
          <span>Visit</span>
          <a href={"https://furrl.in"}>
            <span className="underline">Furrl.in</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DefaultPage;
