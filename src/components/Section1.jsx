import React from 'react';
import bg from "../assets/bg.jpg";
const Section1 = () => {
    const cardsData = [
        {
            title: "Independency",
            description: "Explore the creativity of independent designers from around the globe.",
            p: "Know more"
        },
        {
            title: "Uniquity",
            description: "Discover the charm of unique pieces that stand out effortlessly.",
            p: "Know more"
        },
        {
            title: "Quality",
            description: "Experience unparalleled craftsmanship and attention to detail.",
            p: "Know more"
        },
        {
            title: "Sustainability",
            description: "Embrace eco-conscious fashion choices without compromising on style.",
            p: "Know more"
        }
    ];

    return (

        <div className='text-white'>
            <div className="h-160 w-full bg-top relative" style={{ backgroundImage: `url(${bg})` }}>
                <h1 className='text-[60px] md:text-[8vw] uppercase absolute bottom-1/3 left-3/25'>Design</h1>
                <h1 className='text-[60px] md:text-[8vw] uppercase absolute bottom-1/8 left-3/15'>&Freedom</h1>
            </div>
            <div className='flex gap-4 mt-4 px-4 mx-5 h-70'>
                {cardsData.map(function (card,idx) {
                    return (<div key = {idx} className="p-10 flex flex-col gap-4 h-60 rounded-md bg-[#1E1E1E]">
                        <h4 >{card.title}</h4>
                        <p className='text-sm text-[#a1a1a1]'>{card.description}</p>
                        <h5>{card.p}</h5>
                    </div>);
                })}

            </div>
        </div>
    );
};

export default Section1;