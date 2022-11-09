import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  
 const { id } = useParams();
 console.log(id);
  const [productDetails,setProductDetails]=useState([]);
  useEffect(()=>{
    fetch(`https://waerehouse-009.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  },[])
  
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl p-11">
        <figure className='m-5'>
          <img className='w-96 h-96 rounded-md'
          src={productDetails.picture} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productDetails.name}</h2>
          <p>{productDetails.about}</p>
          <div className="card-actions justify-between">
            <button className="btn btn-primary">Delivery</button>
            <button className="btn btn-primary">Restock</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;