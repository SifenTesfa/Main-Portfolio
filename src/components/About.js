import React from 'react';
import Lottie from 'react-lottie';
import load from './load.json';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: load,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section className="section" id='about'>
      <div className='container  mx-auto'>
        <div className='flex flex-col gap-y-6 lg:flex-row lg:items-center
        lg:gap-x-10 lg:gap-y-0'>
          
          <div className='flex  justify-center items-center h-full sm:h-auto'>
    <Lottie options={defaultOptions} width={600} />
  </div>
          
  <div className='flex-1 '>
            <motion.h2 variants={fadeIn('left',0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.7}} className='h2 text-accent'>About me.</motion.h2>
            <motion.h3 variants={fadeIn('left',0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.7}} className='h3 mb-4'>Hi. I'm Sifen Tesfa, nice to meet you. Please take a look around.</motion.h3>
            <motion.p variants={fadeIn('left',0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}>
              I am passionate about building excellent software that improves the lives of those around me. I specialize
              in creating software for clients ranging from individuals and small businesses all the way to large enterprise corporations.
              What would you do if you had a software expert available at your fingertips?
            </motion.p>
            
            
               
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;