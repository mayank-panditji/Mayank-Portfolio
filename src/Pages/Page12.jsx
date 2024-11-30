import React from 'react'

const Page12 = () => {
  return (
    <div>
    <div className="h-screen p-4 bg-white  ">
      <div className="h-full w-full bg-black rounded-[40px] overflow-hidden ">
        <video
          autoPlay="true"
          loop
          muted
          className="h-full w-full object-cover "
          src="/file 8.mp4"
        ></video>
        <div className="relative flex items-center justify-center">
          <h1 className="font-[anzo4] text-[28vh] absolute text-white uppercase bottom-[380px] " style={{
          backgroundImage: 'url(./sky11.webp)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          WebkitBackgroundClip: 'text', 
          backgroundClip: 'text', 
          color: 'transparent',
        }}>
            Personal
          </h1>
          <h3 className="font-[anzo2] text-[14px] absolute text-[#9B9B9B] uppercase bottom-[420px] ">
          Honesty, Communication, Punctuality
          </h3>
        </div>

        <div className="relative flex items-center justify-center">
          <h1 className="font-[anzo4] text-[28vh] absolute text-white uppercase bottom-[180px]
          
          "
          style={{
              backgroundImage: 'url(./sky3.webp)', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              color: 'transparent',
            }}>
            proffesional
          </h1>
          <h3 className="font-[anzo2] text-[14px] absolute text-[#9B9B9B] uppercase bottom-[220px] ">
          Photoshop, Figma
          </h3>
        </div>
        <div className="relative flex items-center justify-center">
          <h1 className="font-[anzo4] text-[28vh] absolute text-white uppercase bottom-[-18px] " style={{
          backgroundImage: 'url(./sky6.webp)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          WebkitBackgroundClip: 'text', 
          backgroundClip: 'text', 
          color: 'transparent',
        }} >
              
            additional
          </h1>
          <h3 className="font-[anzo2] text-[14px] absolute text-[#9B9B9B] uppercase bottom-[25px] ">
         React,Gamer
          </h3>
        </div>

      </div>
    </div>
  </div>
);
};
export default Page12
