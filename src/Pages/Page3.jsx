import React from 'react'

const Page3 = () => {
  return (
    <div className='h-screen bg-white flex items-center justify-center relative'>
        <img className='absolute z-20' src="./try.avif
        " alt="" />
      <video src="./file.mp4" className='h-[70vh] w-[50vw] object-cover relative z-10' autoPlay={true} loop muted controls></video>
      <div className="h-1 w-2/3 absolute z-0 bg-[#696256] top-[30%]"></div>
      <div className="h-1 w-3/5 absolute z-0 bg-[#696256] top-[60%]"></div>
      <div className="h-1 w-4/5 top-[80%] absolute z-0 bg-[#696256]"></div>
    </div>
  )
}

export default Page3
