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

        <div className='text-white h-auto'>
            <div className="h-[40vh] w-full bg-top relative md:h-[70vh] "  style={{ backgroundImage: `url(${bg})` }}>
                <h1 className='text-[5vh] md:text-[10vw] uppercase absolute bottom-1/3 left-3/25 sm:text-[7vh]'>Design</h1>
                <h1 className='text-[5vh] md:text-[10vw] uppercase absolute bottom-1/8 left-3/15 sm:text-[7vh]'>&Freedom</h1>
            </div>
            <div className='flex gap-4 mt-4 px-0 mx-2 justify-center pb-4 flex-wrap md:flex'>
                {cardsData.map(function (card,idx) {
                    return (<div key = {idx} className="p-10  flex flex-col gap-4   sm:w-170 h-60 rounded-md bg-[#1E1E1E] lg:w-100">
                        <h4 className='text-3xl md:text-md'>{card.title}</h4>
                        <p className='text-xl text-[#a1a1a1] md:text-md'>{card.description}</p>
                        <h5>{card.p}</h5>
                    </div>);
                })}

            </div>
        </div>
    );
};

export default Section1;