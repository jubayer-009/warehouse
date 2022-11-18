import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product, email }) => {
  const { name, picture, price, quantity, about, _id } = product;

  const navigate = useNavigate();
  const handleCart = (id, name, picture, price, quantity, email) => {
    // console.log(id, name, picture, price, quantity, email);
    const productInfo = { id, name, picture, price, quantity, email };
    fetch("http://localhost:5000/cart", {
      method: "POST",
      body: JSON.stringify(productInfo),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const handleProduct = (id) => {
    navigate(`/productDetails/${id}`);
  };
  return (
    <div className="bg-base-100 border border-primary rounded-lg  shadow-xl">
      <figure className="rounded-lg">
        <img className="h-96 w-96 mt-7 rounded-lg" src={picture} alt={name} />
      </figure>
      <div className="card-body">
        <h1 className="text-xl font-bold "> {name}</h1>

        <div className="card-actions justify-start">
          <button
            onClick={() =>
              handleProduct(_id, name, picture, price, quantity, about)
            }
            to="/productDetails"
            className="btn btn-primary text-white"
          >
            Details
          </button>
          <button
            // onClick={()=>handleProduct(_id)}
            onClick={() =>
              handleCart(_id, name, picture, price, quantity, email)
            }
            className="btn btn-primary text-white"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;