import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';
import ContactUs from './ContactUs';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      {/* <About></About> */}
      {/* <WhyChooseUs></WhyChooseUs> */}
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;