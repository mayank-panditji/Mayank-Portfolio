import React from 'react'

const Page11 = () => {
  return (
    <div className='h-screen w-screen bg-white'>
      <div className='flex'>
        <h1 className='uppercase  px-48  py-80 text-black text-[12.5vw] font-[anzo4]' 
         style={{
            backgroundImage: 'url(./sky.webp)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text', 
            backgroundClip: 'text', 
            color: 'transparent',
          }}
        >soft</h1>
        <h1 className='uppercase text-black text-[40.5vw]  font-[anzo4]'
         style={{
            backgroundImage: 'url(./sky-2.webp)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text', 
            backgroundClip: 'text', 
            color: 'transparent',
          }}
        >skills
        </h1>
      </div>
    </div>
  )
}

export default Page11
