import React from 'react';

const Product = ({ product }) => {
  const {name,picture,price,quantity,about}=product
  return (
    <div className="bg-base-100 border border-primary rounded-lg  shadow-xl">
      <figure className="rounded-lg">
        <img className="h-96 w-96 mt-7 rounded-lg" src={picture} alt={name} />
      </figure>
      <div className="card-body">
        <h1 className="text-xl font-bold "> {name}</h1>

        <div className="card-actions justify-start">
          <button className="btn btn-primary text-white">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Product;