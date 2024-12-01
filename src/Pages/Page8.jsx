import React from "react";
import Page8bottom from "../componenets/Page8bottom";
import "remixicon/fonts/remixicon.css";
import Page8header from "../componenets/Page8header";
const Page8 = () => {
  return (
    <div className="p-3 h-screen w-screen">
      <div
        id="page1-in"
        className="h-full w-full p-12 rounded-[50px] bg-[url(/Anzo.jpg)] bg-cover shadow-xl shadow-gray-700 bg-white"
      >
        <div className="">
          <img
            src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
            alt=""
            className="mt-6"
          />
          <Page8header />
        </div>

        <div className="flex items-center justify-center h-5">
          <img
            className="pl-20 object-cover h-[400px] rounded-[60%]  mt-[120px] mr-[60px]"
            src="/maya.jpg"
            alt="Your Branded Picture"
          />
        </div>

        <Page8bottom />
      </div>
    </div>
  );
};

export default Page8;
