import React, { useEffect } from 'react';
import gsap from 'gsap';

const Page4 = () => {
  useEffect(() => {
    gsap.to('.move-image', {
      rotation: 360,
      repeat: -1, 
      duration: 10, 
      ease: 'none', 
      transformOrigin: '50% 50%',  
    });
  }, []);

  return (
    <div className='h-screen p-4 bg-white relative'>
  
      <div
        className='h-full w-full bg-cover bg-center rounded-[50px] shadow-md shadow-gray-500'
        style={{ backgroundImage: "url('/BackgroundAnzoStudio.avif')" }}
      ></div>

     
      <h1 className='font-[anzo4] text-[20vw] absolute text-[#9B9B9B] uppercase bottom-60 left-36' style={{
            backgroundImage: 'url(./sky4.webp)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text', 
            backgroundClip: 'text', 
            color: 'transparent',
          }}>what</h1>
      <h1 className='font-[anzo4] text-[20vw] absolute text-white uppercase bottom-4 left-40' style={{
            backgroundImage: 'url(./sky4.webp)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text', 
            backgroundClip: 'text', 
            color: 'transparent',
          }}>I DO</h1>

      <div className="absolute bottom-36 right-36">
        <img
          src="/moon.avif"
          alt="rotating"
          className="move-image w-[300px] h-[300px] object-cover"
        />
      </div>

     
      <div className='mb-[20px] relative'>
        <h3 className='uppercase text-[18px] bottom-16 left-36 text-white font-[anzo2] absolute'>
          I design and develop
        </h3>
        <h3 className='uppercase text-[18px] absolute bottom-10 left-36 font-[anzo3] text-gray-400'>
          Modern, impactful and luxurious
        </h3>
        <h3 className='uppercase text-[18px] absolute bottom-4 left-36 text-white font-[anzo2]'>
          websites that seamlessly bridge your goals and needs of your clients
        </h3>
      </div>
    </div>
  );
};

export default Page4;
