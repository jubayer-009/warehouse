import React from 'react';
import Services from '../Services/Services';
import About from './About';
import Banner from './Banner';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>

      <About></About>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;