import React from 'react';
import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const Services = () => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return <div className="section text-center justify-center" id='services'>
    
    <div className='lg:pt-[60px] lg:w-[1000px] '>
  <motion.h2
  variants={fadeIn('left',0.2)}
  initial='hidden'
  whileInView={'show'}
  viewport={{once:false, amount:0.7}}
    className='w-full text-[50px]  lg:pd-[12px] p-12 text-center justify-center  text-accent  object-cover'
   
  >  SKILLS </motion.h2>

  <div className='relative flex items-center'>
    <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
    <div
      id='slider'
      className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
    >
      {data.map((item) => (
        <img
          className='w-[190px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
          src={item.img}
          alt='/'
        />
      ))}
    </div>
    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
  </div>
</div></div>;
};

export default Services;
