import React, { useRef } from 'react'
import Page1bottom from '../componenets/Page1bottom'
import { gsap } from 'gsap'
import Tilttext from '../componenets/Tilttext'

const Page1 = () => {
  const tiltRef = useRef(null)

  const mouseMoving = (e) => {
    const rect = tiltRef.current.getBoundingClientRect()
    const xOffset = (e.clientX - rect.x - rect.width / 2) / 20
    const yOffset = -(e.clientY - rect.y - rect.height / 2) / 20

   
    gsap.to(tiltRef.current, {
      rotationX: yOffset,
      rotationY: xOffset,
      ease: 'elastic.out(1,0.3)',
      duration: 3, 
    })
  }

  return (
    <div onMouseMove={mouseMoving} className='h-screen p-3 relative'>
      <div
        id='page1-in'
        className='relative h-full w-full p-12 rounded-[50px] bg-[url(./mtttt.jpg)] bg-cover shadow-xl shadow-gray-700 bg-white'
      >
        <img
          className='py-4'
          src='https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png'
          alt=''
        />
        
        <Tilttext abc={tiltRef}/>
        <Page1bottom />
      </div>
    </div>
  )
}

export default Page1
