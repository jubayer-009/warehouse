import React from 'react';
import Services from '../Services/Services';
import About from './About';
import Banner from './Banner';
import ContactUs from './ContactUs';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <WhyChooseUs></WhyChooseUs>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;