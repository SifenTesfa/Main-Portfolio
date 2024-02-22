import React from 'react';
import logo from '../assets/imggg.png'
const Header = () => {
  return <header className="mt-[-10px]">
       <div className='container mx-auto'>
       <div className='flex justify-between items-center'>
        <a href='#'>
          <img src={logo} alt='' className=' h-[125px]  w-[125px]'/>
          </a>
          <button className='btn btn-sm '>Resume</button>
        </div>
       </div>
   
    </header>;
};

export default Header;
