import React from 'react';
import Image from '../assets/immg.png';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { HiOutlineMail } from 'react-icons/hi';


const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] mt-[-30px] flex items-center" id='home'>
      <div className='container  mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('left',0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.5}}
              className='text-[45px]  pl-0 lg:pl-32 font-bold leading-[0.8] lg:text-[80px]'>
              SIFEN <span>TESFA</span>
            </motion.h1>
            <motion.div 
              variants={fadeIn('left',0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.5}} 
              className='mb-6 pl-0 lg:pl-32 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer", 2000,
                  "Deve", 2000,
                  "Developer", 2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
              variants={fadeIn('left',0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.5}} 
              className='mb-8 max-w-lg mx-auto md:ml-32 ml-0 lg-mx-0'>
              I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.
              Currently, I’m focused on building responsive front-end web applications.
            </motion.p>
            <motion.div 
              variants={fadeIn('left',0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.5}}
              className='flex max-w-max gap-x-6 items-center pl-0 lg:pl-32 mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>View Work</button>
        
            </motion.div>
            <motion.div
              variants={fadeIn('left',0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.7}} 
              className=' flex lg:hidden  text-[20px] gap-x-6 max-w-max  lg:ml-[136px] mx-auto'>
              <a href='https://www.linkedin.com/public-profile/settings' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin  />
              </a>
              <a href='https://github.com/SifenTesfa' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=sifentt@gmail.com" target='_blank' rel='noopener noreferrer'>
              <HiOutlineMail  />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down',0.3)} 
            initial='hidden'
            whileInView={'show'}
            
            className='hidden rounded-full mix-blend-lighten overflow-hidden  lg:flex flex-1 max-w-[200px] lg:max-w-[342px] mt-[-73px]'>
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;