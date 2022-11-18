import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useProducts from '../../../Hooks/useProducts';
import Product from './Product';

const Products = ({handleCart}) => {
  const [products]=useProducts();
  const [user, loading, error] = useAuthState(auth);

//  console.log(email);
  
  return (
    <div className="my-9 mx-9 p-10 bg-base-100 " id="products">
      <h1 className="text-4xl font-bold text-center text-primary ">
        <span className="text-secondary text-4xl font-bold px-7 ">\\</span>Our
        Products
        <span className="text-secondary text-4xl font-bold px-7 ">\\</span>
      </h1>
      <div className="divider mx-auto w-1/2 lg:w-1/3 "></div>
      <div className="card lg:card-side   grid  lg:grid-cols-3 grid-cols-1 gap-4 bg-base-100 p-7">
        {products.map((product) => (
          <Product
            product={product}
            email={user?.email}
            handleCart={handleCart}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;