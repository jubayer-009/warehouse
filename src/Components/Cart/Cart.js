import React from 'react';
import UseCartData from '../../Hooks/UseCartData';
import CartProduct from './CartProduct';

const Cart = () => {
  const [cartData]=UseCartData();
  return (
    <div className="py-10">
      <div >
        {
          cartData.map((data)=>
          <CartProduct
          data={data}
          ></CartProduct>)
        }
      </div>
    </div>
  );
};

export default Cart;