import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const UseCartData = () => {
  const [user,loading]=useAuthState(auth);
  const email=user?.email;
  const [cartData,setCartData]=useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/cartproduct?email=${email}`)
      .then((res) => res.json())
      .then((data) => setCartData(data));
  }, [cartData]);
  return [cartData];
};

export default UseCartData;