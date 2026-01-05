import React from 'react';
import bottom from "../assets/bottom.jpg";
const Section2 = () => {
    return (
        <div className=" w-full mt-5 flex flex-col gap-10">
            <div className=" grid grid-cols-2 gap-6    md:flex md:justify-between md:items-center w-full px-10">                   
                <div className='flex flex-col gap-1 items-center'>
                    <h5 className='text-[#a1a1a1] text-sm uppercase'>Designers</h5>
                    <span className='text-5xl text-[#a1a1a1]'>150+</span>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <h5 className='text-[#a1a1a1] text-sm uppercase'>Clients</h5>
                    <span className='text-5xl text-[#a1a1a1]'>500+</span>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <h5 className='text-[#a1a1a1] text-sm uppercase'>Masterpieces</h5>
                    <span className='text-5xl text-[#a1a1a1]'>20K+</span>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <h5 className='text-[#a1a1a1] text-sm uppercase'>events</h5>
                    <span className='text-5xl text-[#a1a1a1]'>50+</span>
                </div>

            </div>
            <div className='flex  flex-col w-full gap-5 px-5 lg:flex-row justify-center mb-3.5'>
                <div className='min-w-[50%] items-center rounded-md flex gap-15 flex-col bg-[#1E1E1E] p-9 md:justify-center md:items-start'>
                    <span className='text-sm text-[#a1a1a1] uppercase'>About</span>
                    <h3 className='text-5xl w-full text-white  mb-5 md:w-[70%] text-center md:text-left'>Where fashion meets freedom</h3>
                    <div className='flex gap-6'>
                        <p className='text-sm text-[#a1a1a1] w-[50%] leading-6'>Fashion inspiration emerges from everyday life, art, and emotions, shaping unique styles. It empowers people to experiment boldly, express identity, and transform simple clothing into meaningful personal statements.</p>
                        <p className='text-sm text-[#a1a1a1] w-[50%] leading-6'>
                            Fashion inspiration comes from individuality, culture, and creativity, blending timeless elegance with modern expression. It encourages confidence, self-discovery, and storytelling through colors, textures, and designs that reflect personality.
                        </p>
                    </div>
                </div>
                <div className='min-w-[50%] rounded-md'>
                    <img className='h-full w-full object-cover rounded-md' src={bottom} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Section2;