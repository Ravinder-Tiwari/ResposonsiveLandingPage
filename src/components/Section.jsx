import React from 'react';
import Section1 from "./Section1.jsx";
import Section2 from './Section2.jsx';

const Section = () => {
  return (
    <div className='overflow-x-hidden w-full'>
       <Section1 />
       <Section2 />
    </div>
  );
};

export default Section;