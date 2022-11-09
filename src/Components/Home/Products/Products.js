import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  },[])
  return (
    <div className="my-9 mx-9 p-10 bg-base-100 ">
      <h1 className="text-5xl font-bold text-center text-primary ">
        <span className="text-secondary text-5xl font-bold px-7 ">\\</span>Our
        Products
        <span className="text-secondary text-5xl font-bold px-7 ">\\</span>
      </h1>
      <div className="divider mx-auto w-1/3 "></div>
      <div className="card lg:card-side   grid  lg:grid-cols-3 grid-cols-1 gap-4 bg-base-100 p-7">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;