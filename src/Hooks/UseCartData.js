import { useEffect, useState } from 'react';

const UseCartData = () => {
  const [cartData,setCartData]=useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => setCartData(data));
  }, [cartData]);
  return [cartData];
};

export default UseCartData;