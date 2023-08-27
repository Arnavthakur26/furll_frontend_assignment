import React from "react";
import upDownArrow from "../public/up-down-arrow_icon.svg";
import filterIcon from "../public/filter_icon.svg";
import Image from "next/image";

const FilterTab = () => {
  return (
    <div className="flex justify-between mt-5 mx-3">
      <div className="text-xs italic font-extralight">999 Products</div>
      <div className="flex gap-4">
        <div>
          <Image src={upDownArrow} alt="sort" width={22} height={22} />
        </div>
        <div>
          <Image src={filterIcon} alt="sort" width={22} height={22} />
        </div>
      </div>
    </div>
  );
};

export default FilterTab;
