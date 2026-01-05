import React from 'react';

const Nav = () => {
  return (
    <div className='flex justify-between items-center  w-full px-3 py-2.5 text-white'>
      <h1 className='text-md'>DVSY</h1>
      <div className="hidden gap-4 items-center md:flex">
        <h3 className="relative px-3 py-1 bg-[#1E1E1E] rounded-sm uppercase text-white overflow-hidden group cursor-pointer">
          <span className="absolute inset-0 bg-red-500 -translate-x-full group-active:translate-x-0 transition-transform duration-300"></span>
          <span className="relative z-10">Designers</span>
        </h3>

        <h3 className="relative px-3 py-1 bg-[#1E1E1E] rounded-sm uppercase text-white overflow-hidden group cursor-pointer">
          <span className="absolute inset-0 bg-red-500 -translate-x-full group-active:translate-x-0 transition-transform duration-300"></span>
          <span className="relative z-10">Collabs</span>
        </h3>

        <h3 className="relative px-3 py-1 bg-[#1E1E1E] rounded-sm uppercase text-white overflow-hidden group cursor-pointer">
          <span className="absolute inset-0 bg-red-500 -translate-x-full group-active:translate-x-0 transition-transform duration-300"></span>
          <span className="relative z-10">Events</span>
        </h3>

        <h3 className="relative px-3 py-1 bg-[#1E1E1E] rounded-sm uppercase text-white overflow-hidden group cursor-pointer">
          <span className="absolute inset-0 bg-red-500 -translate-x-full group-active:translate-x-0 transition-transform duration-300"></span>
          <span className="relative z-10">Blog</span>
        </h3>

        <h3 className="relative px-3 py-1 bg-[#1E1E1E] rounded-sm uppercase text-white overflow-hidden group cursor-pointer">
          <span className="absolute inset-0 bg-red-500 -translate-x-full group-active:translate-x-0 transition-transform duration-300"></span>
          <span className="relative z-10">Card</span>
        </h3>

        <button className='px-3 py-1 bg-[#DD6F5A]  rounded-sm uppercase active:scale-95'>Get in Touch</button>

      </div>
      <button className='px-3 py-1 flex bg-[#DD6F5A]  rounded-sm uppercase md:hidden active:scale-95'>Menu</button>
    </div>
  );
};

export default Nav;