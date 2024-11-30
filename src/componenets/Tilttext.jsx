import React from 'react'

const Tilttext = (props) => {
  return (
    <div id='tilDiv' ref={props.abc} className='mt-20'>
    <h1 className='text-[4vw] uppercase font-[anzo5] leading-[3vw]'>
      I am <span className='text-black font-[anzo1]'>DARK MODE</span>™
    </h1>
    <h1 className='text-[6.5vw] uppercase font-[anzo1] leading-[7vw]'
    style={{
      backgroundImage: 'url(./sky6.webp)', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      WebkitBackgroundClip: 'text', 
      backgroundClip: 'text', 
      color: 'transparent',
    }}
    >
      Designer
    </h1>
    <h1 className='uppercase leading-[3vw] text-[4vw] font-[anzo5]' style={{
            backgroundImage: 'url(./sky10.webp)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text', 
            backgroundClip: 'text', 
            color: 'transparent',
          }}>
      To Hire
    </h1>
  </div>
  )
}

export default Tilttext
