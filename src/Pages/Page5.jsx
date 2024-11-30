import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Page5 = () => {
 
     useGSAP(function(){
        gsap.from(".rotatetex",{
            transform:'rotateX(-80deg)',
            opacity:0,
            duration:10 ,
            stagger:1,
            ScrollTrigger:{
              trigger:'.rotatetext',
              start:"top -50%",
              end:"top -400%",
              scrub:2
            }            
        })
     })
 
 
    return (
     
    <div id="section2" className="bg-white text-center text-black ">
      
      <div className="rotatetex">
        <h1 className="text-[42vw] text-black font-[anzo4]  leading-[35vw]  " style={{
            backgroundImage: 'url(./sky11.webp)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text', 
            backgroundClip: 'text', 
            color: 'transparent',
          }}>HELPING</h1>
      </div>
      <div className="rotatetex">
        <h1 className="text-[42vw] text-[#9B9B9B] font-[anzo4]  leading-[35vw] " style={{
            backgroundImage: 'url(./sky11.webp)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text', 
            backgroundClip: 'text', 
            color: 'transparent',
          }}>MY</h1>
      </div>
      <div className="rotatetex">
        <h1 className="text-[42vw] text-black font-[anzo4] leading-[35vw] " style={{
            backgroundImage: 'url(./sky11.webp)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text', 
            backgroundClip: 'text', 
            color: 'transparent',
          }}>CLIENTS</h1>
      </div>
      <div className="rotatetex">
        <h1 className="text-[42vw] text-black font-[anzo4]  leading-[35vw] " style={{
            backgroundImage: 'url(./sky11.webp)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text', 
            backgroundClip: 'text', 
            color: 'transparent',
          }}>TO ACHIEVE</h1>
      </div>
      <div className="rotatetex">
        <h1 className="text-[42vw] text-[#9B9B9B] font-[anzo4] leading-[35vw] " style={{
            backgroundImage: 'url(./sky11.webp)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text', 
            backgroundClip: 'text', 
            color: 'transparent',
          }}>THIER</h1>
      </div>
      <div className="rotatetex">
        <h1 className="text-[42vw] text-black font-[anzo4] leading-[35vw] " style={{
            backgroundImage: 'url(./sky11.webp)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text', 
            backgroundClip: 'text', 
            color: 'transparent',
          }}>DREAMS!</h1>
      </div>
   
    </div>
  );
};

export default Page5;
