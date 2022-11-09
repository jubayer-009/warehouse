import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import Product from './Product';

const Products = () => {
  const [products]=useProducts();
  
  return (
    <div className="my-9 mx-9 p-10 bg-base-100 ">
      <h1 className="text-4xl font-bold text-center text-primary ">
        <span className="text-secondary text-4xl font-bold px-7 ">\\</span>Our
        Products
        <span className="text-secondary text-4xl font-bold px-7 ">\\</span>
      </h1>
      <div className="divider mx-auto w-1/2 lg:w-1/3 "></div>
      <div className="card lg:card-side   grid  lg:grid-cols-3 grid-cols-1 gap-4 bg-base-100 p-7">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;