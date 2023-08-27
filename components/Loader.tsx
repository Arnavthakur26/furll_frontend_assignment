import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="overflow-hidden flex justify-center">
      <div className=" ">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#7e59e7", "#7e59e7", "#7e59e7", "#7e59e7", "#7e59e7"]}
        />
      </div>
    </div>
  );
};

export default Loader;
