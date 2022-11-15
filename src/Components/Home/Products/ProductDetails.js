import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

  const { id } = useParams();
  const [productDetails,setProductDetails]=useState([]);

  const {quantity}=productDetails;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const [getinput,setGetInput]=useState(0);
const getdata=(event)=>{
  setGetInput(event.target.value);
  console.log(getinput);

}
  
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
   const handleRestore = (i,q) => {
       const inputQuantity = parseInt(getinput);
       console.log(inputQuantity);

       const quantity = q + inputQuantity;
    setQuantityCounter(quantity);
   console.log("clicked", quantityCounter);
         const updatedDoc = { quantity };
         
         
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

            <div>
              <label
                htmlFor="my-modal"
                className="btn btn-sm btn-primary  text-white "
              >
                Restock
              </label>
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box ">
                  <input onBlur={getdata} type="number" name="Quantity" id="" />
                  <div className="modal-action">
                    <button
                      onClick={() => handleRestore(id, quantity)}
                      className="btn btn-primary"
                    >
                      <label htmlFor="my-modal">Submit</label>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;