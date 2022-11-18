import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";
import ProductDetails from './Components/Home/Products/ProductDetails';
import Login from "./Components/LogIn";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/Signup";

function App() {
  //  const [clickCount, setClickCount] = useState(0);

    //  const [user, loading, error] = useAuthState(auth);
      //  const { email } = user;
  //  const handleCart = (id) => {
  
  //   setClickCount(clickCount + 1);
  //       fetch(`http://localhost:5000/products/${id}`)
  //         .then((res) => res.json())
  //         .then((data) =>setCartProduct(data));
    
      
  //    console.log(clickCount, id, cartProduct);
    //  fetch("http://localhost:5000/cart", {
    //    method: "POST",
    //    body: JSON.stringify(cartProduct),
    //    headers: {
    //      "content-type": "application/json",
    //    },
    //  })
    //    .then((response) => response.json())
    //    .then((data) => {
    //      console.log(data);
    //      window.alert("added to cart");
    //    });
 
    //};
    
   
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              // clickCount={clickCount}
              // setClickCount={setClickCount}
              // handleCart={handleCart}
            ></Home>
          }
        ></Route>
        <Route
          path="/productDetails/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
