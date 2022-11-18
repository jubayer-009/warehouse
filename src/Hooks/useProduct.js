import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useProduct = () => {
  const {id}=useParams();
   const [product, setProduct] = useState({});
   useEffect(() => {
     fetch(`http://localhost:5000/products/${id}`)
       .then((res) => res.json())
       .then((data) => setProduct(data));
   }, []);
  return [product];
};

export default useProduct;