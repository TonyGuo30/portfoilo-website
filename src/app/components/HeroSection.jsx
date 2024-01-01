"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
      <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400'>
        Hello, I'm{" "}
        </span>
        <br></br>
      <TypeAnimation
      sequence={[
        'Tony Guo',
        1000,
        'Software Developer Engineering',
        1000,
        'Web Developer',
        1000,
        'Mobile Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
      </h1>
    <p className='text-[#ADB7BE] text-lg sm:text-lg mt-6 lg:text-xl'>
    I am an undergraduate at UW - Madison, double major in computer science and computer engineering
    </p>
    <div>
      <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-white hover:bg-slate-200 text-white'>
        Connect With Me
        </button>
      <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
        </button>
    </div>
    </div>
    <div className='col-span-5 mt-4 lg:mt-0 place-self-center'>
      <div className='rounded full bg-[#181818] w-[100px] h-[200px] relative lg:w-[200px] lg:h-[180px]'>
      <Image
        src="/images/hero-image.png"
        alt='hero image'
        className="absolute transform -translate-x -translate-y-1/2 top-1/2"
        width={200}
        height={250}
        />
      </div>
    </div>
    </div>
    </section>
  )
}

export default HeroSection