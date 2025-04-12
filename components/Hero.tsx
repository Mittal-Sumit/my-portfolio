"use client";

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/text-generation-effect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

function Hero() {
  return (
    <div className=' pb-20 pt-36'>
      <Spotlight className=' -top-40 -left-10 md:-top-20 md:-left-32 h-screen' fill='white' />
      <Spotlight className=' top-10 left-full h-[80vh] w-[50vh] ' fill='purple' />
      <Spotlight className=' top-28 left-80 h-[80vh] w-[50vh]' fill='blue' />
    

<div className="absolute top-0 left-0 flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
<div
  className={cn(
    "absolute inset-0",
    "[background-size:40px_40px]",
    "[background-image:linear-gradient(to_right,#e4e4e7_0.1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_0.1px,transparent_1px)]",
    "dark:[background-image:linear-gradient(to_right,#262626_0.1px,transparent_1px),linear-gradient(to_bottom,#262626_0.1px,transparent_1px)]",
  )}
/>
</div>

<div className='flex justify-center relative my20 z-10'>
    <div className=' max-w-[89vh] md:max-w-2xl lg:max-w-[90vh] flex flex-col items-center justify-center'>
    <h2 className=' uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
        Dynamic Magic with NextJS
    </h2>

    <TextGenerateEffect 
    className='text-center text-[40px] md:text-5xl lg:text-6xl' 
    words='Transforming concepts into Seamless User Experiences'
    />

    <p className='text-center md:tracking-wider text-sm md:text-lg lg:text-2xl mb-4'>
        Hi, I am Sumit Mittal, a Full Stack Developer  
    </p>

    <a href='#about'>
    <MagicButton 
    title = "Show My Work"
    icon= {<FaLocationArrow />}
    position='right'
    />
     </a>
    </div>
</div>




</div>
  )
}

export default Hero
