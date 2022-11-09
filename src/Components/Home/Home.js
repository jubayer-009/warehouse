import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Products from './Products/Products';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Products></Products>
      {/* <About></About> */}
      {/* <WhyChooseUs></WhyChooseUs> */}
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;