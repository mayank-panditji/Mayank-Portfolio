import React from "react";
import { gsap, Linear } from "gsap";
import { useGSAP } from "@gsap/react";
const Page13 = () => {
  useGSAP(function () {
    gsap.to("#banner img", {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: Linear.easeNone,
    });
  });
  return (
    <div className="h-screen p-4 bg-white relative ">
      <div className="h-full w-full bg-cover bg-center rounded-[40px] shadow-md shadow-gray-700">
        <video
          autoPlay="true"
          loop
          muted
          className="h-full w-full object-cover "
          src="/22925-331791032_small.mp4"
        ></video>
      </div>

      <h1
        className="font-[anzo4] text-[20vw] absolute  uppercase bottom-60 left-36"
        style={{
          backgroundImage: "url(./sky4.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        how{" "}
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
          can
        </span>
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
          {" "}
          I
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
        Help{" "}
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
          you
        </span>
      </h1>

      <div className="absolute bottom-20 left-[800px] flex gap-8 ">
        <img
          src="/START UP.png"
          alt="rotating"
          className="move-image  object-contain"
        />
        <div className="h-[100px] w-[2px] bg-white"></div>
        <div>
          <h3 className="text-[#9B9B9B] uppercase font-[anzo3]">
            My mission is to drive exceptional growth for my clients by
            increasing their brand appearance, defining their identity, and
            engaging customers through modern and minimalistic touch.
          </h3>
        </div>
      </div>

      <div className="absolute top-60 left-[800px] flex gap-8 ">
        <img
          src="/EARTH.png"
          alt="rotating"
          className="move-image  object-contain"
        />
        <div className="h-[100px] w-[2px] bg-white"></div>
        <div>
          <h3 className="text-[#9B9B9B] uppercase font-[anzo3]">
            I am a self-taught web and brand designer with a passion for
            creating unique and timeless masterpieces for ambitious
            professionals, entrepreneurs, artists, and boutique businesses.{" "}
          </h3>
        </div>
      </div>
      <div className="absolute top-14 left-[800px] flex gap-8 ">
        <img
          src="/SUN.png"
          alt="rotating"
          className="move-image  object-contain"
        />
        <div className="h-[100px] w-[2px] bg-white"></div>
        <div>
          <h3 className="text-[#9B9B9B] uppercase font-[anzo3]">
            With expertise in web development, I aim to minimize my client's
            resources spent on macro and micro-management, marketing research,
            and hiring a whole team of a larger agency.
          </h3>
        </div>
      </div>

      <div className="mb-[20px] relative">
        <h3 className="uppercase text-[18px] bottom-16 left-36 text-[#9B9B9B] font-[anzo3] absolute">
          Got a project
        </h3>
        <h3 className="uppercase text-[18px] absolute bottom-10 left-36 font-[anzo2] ">
          <span className="text-[#9B9B9B]   font-[anzo3]">then please </span>
          contact me?
        </h3>
      </div>
    </div>
  );
};
export default Page13;
