import React from "react";

const TabBar = () => {
  return (
    <div>
      <div className="bg-[#ebeef3] my-2 mx-3 p-2 rounded-lg flex justify-evenly">
        <div className="text-[#5c6b6b] bg-white rounded-lg py-2 px-4 text-sm inline-block">
          Products
        </div>
        <div className="text-[#5c6b6b]  rounded-lg py-2 px-4 text-sm inline-block">
          Collections
        </div>
      </div>
    </div>
  );
};

export default TabBar;
