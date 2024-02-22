import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Nav = () => {
  return (
    <div>
    <nav className="fixed bottom-2 nav lg:bottom-8 w-full overflow-hidden Z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[80px] backdrop-blur-2xl rounded-full max-w-[460px]
        mx-auto px-5 flex  justify-between items-center text-2xl
        text-white/50">
          <Link to='home' 
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-200}
          className='cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center '>
            <BiHomeAlt />
          </Link>
          <Link to='about' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center'>
            <BiUser />
          </Link>
          <Link to='services'
          activeClass='active'
          smooth={true}
          spy={true} 
          className='cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center'>
            <BsClipboardData />
          </Link>
          <Link to='work' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center'>
            <BsBriefcase />
          </Link>
          <Link to='contact' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center'>
            <BsChatSquareText />
          </Link>
        </div>
      </div>
      
    </nav>
    <div className=' lg:flex hidden  fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-accent'>
            <a
              className='flex justify-between items-center ml-[-5px] w-full text-[#ffffff]'
              href='https://www.linkedin.com/public-profile/settings' target='_blank' rel='noopener noreferrer'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-accent'>
            <a
              className='flex justify-between items-center w-full ml-[-5px] text-[#ffffff]'
              href='https://github.com/SifenTesfa' target='_blank' rel='noopener noreferrer'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-accent'>
            <a
              className='flex justify-between items-center w-full ml-[-5px] text-[#ffffff]'
              href="https://mail.google.com/mail/?view=cm&to=sifentt@gmail.com" target='_blank' rel='noopener noreferrer'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Nav;