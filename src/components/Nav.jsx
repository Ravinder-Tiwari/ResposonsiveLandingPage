import React from 'react';

const Nav = () => {
  return (
    <div className='flex justify-between items-center  w-full px-3 py-2.5 text-white'>
        <h1 className='text-md'>DVSY</h1>
        <div className="hidden gap-4 items-center md:flex">
            <h3 className='px-3 py-1 bg-[#1E1E1E] rounded-sm uppercase'>Designers</h3>
            <h3 className='px-3 py-1 bg-[#1E1E1E] rounded-sm uppercase'>Collab</h3>
            <h3 className='px-3 py-1 bg-[#1E1E1E] rounded-sm uppercase'>Events</h3>
            <h3 className='px-3 py-1 bg-[#1E1E1E] rounded-sm uppercase'>Blog</h3>
            <h3 className='px-3 py-1 bg-[#1E1E1E] rounded-sm'>Card</h3>
            <button className='px-3 py-1 bg-[#DD6F5A]  rounded-sm uppercase'>Get in Touch</button>
            
        </div>
        <button className='px-3 py-1 flex bg-[#DD6F5A]  rounded-sm uppercase md:hidden'>Menu</button>
    </div>
  );
};

export default Nav;