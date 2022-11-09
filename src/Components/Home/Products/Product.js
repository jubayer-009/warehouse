import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const {name,picture,price,quantity,about,_id}=product;
  const navigate=useNavigate();
  const handleProduct=(id)=>{
    navigate(`/productDetails/${id}`);

  }
  return (
    <div className="bg-base-100 border border-primary rounded-lg  shadow-xl">
      <figure className="rounded-lg">
        <img className="h-96 w-96 mt-7 rounded-lg" src={picture} alt={name} />
      </figure>
      <div className="card-body">
        <h1 className="text-xl font-bold "> {name}</h1>

        <div className="card-actions justify-start">
          <button 
          onClick={()=>handleProduct(_id)}
          to="/productDetails" className="btn btn-primary text-white">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;