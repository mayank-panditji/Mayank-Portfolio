import React from "react";
import { gsap, Linear} from 'gsap';
import {useGSAP} from "@gsap/react";
const Page1bottom = () => {
 useGSAP(function(){
  gsap.to('#banner img',{
    rotate:360,
    duration:5,
    repeat:-1,
    ease:Linear.easeNone,
  })
 })
  return (
    <div className="absolute bottom-0 w-full left-0 p-16 flex items-end justify-between">
      <div>
        <h2 className="text-2xl font-[anzo2] tracking-tighter">BRAND DESIGN | WEBSITE DESIGN</h2>
        <h3 className="text-2xl font-[anzo3] text-gray-400 tracking-tighter">BESPOKE FREELANCE</h3>
      </div>
      <div id ='banner' className="">
        <img  className="mb-10"
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png"
          alt=""
        />
        <img
          src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Page1bottom;
