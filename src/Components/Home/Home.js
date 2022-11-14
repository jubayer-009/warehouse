import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading';
import Services from '../Services/Services';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Products from './Products/Products';

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }

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