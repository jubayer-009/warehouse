import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestockModal from './RestockModal';

const ProductDetails = () => {

 const [loader,setLoader]=useState(false)
 
  
 const { id } = useParams();

  const [productDetails,setProductDetails]=useState([]);

  const {quantity}=productDetails;
   

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, []);
   const [quantityCounter, setQuantityCounter] = useState(quantity);

   const handleQuantity = (q,i) => {
    console.log(i);
     const quantity = q - 1;
     const updatedDoc = { quantity };
     setQuantityCounter(quantity);
     console.log("clicked", quantityCounter);
       fetch(`http://localhost:5000/products/${i}`, {
         method: "PUT",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(updatedDoc),
       })
         .then((res) => res.json())
         .then((data) => {
          
           console.log("Data updated Succesfully");
         });
   };
   
  
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl p-11 mr-40">
        <figure className="m-5">
          <img
            className="w-96 h-96 rounded-md"
            src={productDetails.picture}
            alt="Album"
          />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title text-primary font-bold">
            {productDetails.name}
          </h2>
          <p className="w-96">{productDetails.about}</p>
          <p>
            <span className="font-bold text-primary">Price:</span>
            {productDetails.price}
          </p>
          <p>
            <span className="font-bold text-primary">In Stock:</span>
            {productDetails.quantity}
          </p>
          <div className="card-actions justify-between w-96">
            <button
              onClick={() => handleQuantity(quantity, id)}
              className="btn btn-sm btn-primary   text-white "
            >
              Delivery
            </button>
           
            <RestockModal
            id={id}
            quantity={quantity}
            
            ></RestockModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;