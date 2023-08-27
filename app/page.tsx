import React from "react";
import Banner from "@/components/Banner";
import TabBar from "@/components/TabBar";
import FilterTab from "@/components/FilterTab";
import TopNav from "@/components/TopNav";
import Products from "@/components/Products";
import DefaultPage from "@/components/DefaultPage";

const page = () => {
  return (
    <div>
      <div className="max-[420px]:hidden">
        <DefaultPage />
      </div>
      <div className=" min-[420px]:hidden relative">
        <Banner />
        <TabBar />
        <FilterTab />
        <TopNav />
        <Products />
      </div>
    </div>
  );
};

export default page;
