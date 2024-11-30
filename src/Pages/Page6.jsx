import React from 'react'

const Page6 = () => {
  return (
    <div className='h-screen p-4 bg-white relative '>
      <div className='h-full w-full bg-black rounded-[40px] overflow-hidden '>
        <video autoPlay='true' loop muted className='h-full w-full object-cover '
        src="/file1.mp4"></video>
        <h1 className='font-[anzo4] text-[30vw] absolute text-white uppercase -bottom-1 left-40' 
        style={{
          backgroundImage: 'url(./sky3.webp)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          WebkitBackgroundClip: 'text', 
          backgroundClip: 'text', 
          color: 'transparent',
        }}
        >About</h1>
      </div>
    </div>
  )
}

export default Page6
