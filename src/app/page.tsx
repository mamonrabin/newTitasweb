import React from 'react';
import Hero from '../components/home/Hero';
import CountDown from '../components/home/CountDown';
import Services from '../components/home/Services';
// import Testimonal from '../components/home/Testimonal';
import Process from '../components/home/Process';
import About from '../components/home/About';
import Technology from '../components/home/Technology';

const page = () => {
  return (
    <div>
      <Hero/>
      <CountDown/>
      <Services/>
      <Process/>
      <About/>
      <Technology/>
      {/* <Testimonal/> */}
    </div>
  );
};

export default page;