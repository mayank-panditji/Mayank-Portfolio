import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Page10 = () => {
  useEffect(() => {
    
    gsap.to("#banner img", {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "none",
    });

    
    gsap.fromTo(
      ".appear",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".appear",
          start: "top 100%", 
          end: "bottom top",
          scrub: true, 
        },
      }
    );
  }, []);

  return (
    <div className="h-screen p-4 bg-white relative">
      <div
        id="page1-in"
        className="h-full w-full bg-cover bg-center rounded-[50px] shadow-md shadow-gray-700"
        style={{ backgroundImage: "url('/BackgroundAnzoStudio.avif')" }}
      ></div>

      <h1
        className="font-[anzo4] text-[20vw] absolute uppercase bottom-60 left-36"
        style={{
          backgroundImage: "url(./sky4.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        got{" "}
        <span
          className="text-[#9B9B9B]"
          style={{
            backgroundImage: "url(./sky4.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          an
        </span>
      </h1>
      <h1
        className="font-[anzo4] text-[20vw] absolute text-white uppercase bottom-4 left-40"
        style={{
          backgroundImage: "url(./sky4.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Idea
      </h1>

      <div className="absolute bottom-36 left-[700px] flex gap-8">
        <img
          id="banner"
          src="/WorldContact.png"
          alt="rotating"
          className="move-image object-cover"
        />
        <div className="h-[100px] w-[2px] bg-white"></div>
        <div>
         
          <h3 className="appear text-[#9B9B9B] uppercase font-[anzo3]">
            world service
          </h3>
          <h3 className="appear uppercase font-[anzo2]">
            I CAN COME TO WHEREVER YOU ARE.
          </h3>
          <h3 className="appear text-[#9B9B9B] uppercase font-[anzo3]">
            +91 8318512734
          </h3>
        </div>
      </div>

      <div className="mb-[20px] relative">
        <h3 className="uppercase text-[18px] bottom-16 left-36 text-[#9B9B9B] font-[anzo3] absolute">
          it is not just about solving the probem
        </h3>
        <h3 className="uppercase text-[18px] absolute bottom-10 left-36 font-[anzo2]">
          <span className="text-[#9B9B9B] font-[anzo3]">but </span>offering the
          transformation!
        </h3>
      </div>
    </div>
  );
};

export default Page10;
