import React from "react";

const tabList = [
  {
    name: "All",
  },
  {
    name: "Accessories",
  },
  {
    name: "Home",
  },
  {
    name: "Apparel",
  },
  {
    name: "Beauty",
  },
  {
    name: "Kids",
  },
];

const TopNav = () => {
  return (
    <div className="flex gap-2 overflow-scroll no-scrollbar mt-4 ml-2 text-[#5c6b6b]">
      {tabList.map((item, index) => {
        return (
          <div
            key={index}
            className={`border text-[0.75rem] py-2 px-4 rounded-full ${
              index === 0 ? "bg-[#7e59e7] text-white" : ""
            } `}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default TopNav;
