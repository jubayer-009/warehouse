import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductEditForm from './ProductEditForm';

const ProductDetails = () => {

  const { id } = useParams();
  const [productDetails,setProductDetails]=useState([]);
  const {quantity}=productDetails;
  const [getinput,setGetInput]=useState(0);
  const getdata=(event)=>{
  setGetInput(event.target.value);
  console.log(getinput);
 }
  
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, [productDetails]);
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
          <div className="flex justify-between w-96 pb-5">
            <h2 className="card-title text-primary font-bold">
              {productDetails.name}
            </h2>
            <label htmlFor="my-modal-3" className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6  right-11"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
              </svg>
            </label>
          </div>

          <span className="w-96">{productDetails.about}</span>
          <div>
            <span className="font-bold text-primary">Price:</span>
            {productDetails.price}
          </div>
          <div>
            <span className="font-bold text-primary">In Stock:</span>
            {productDetails.quantity}
          </div>

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
                  <label
                    htmlFor="my-modal"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <label className="label">
                    <p className="text-primary font-bold text-xl">
                      Add Quantity{" "}
                    </p>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-xs"
                    onBlur={getdata}
                    type="number"
                    name="Quantity"
                    id=""
                  />
                  <div className="modal-action ">
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
        <ProductEditForm id={id}></ProductEditForm>
      </div>
    </div>
  );
};

export default ProductDetails;