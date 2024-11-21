import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import shopCategory from "./Pages/shopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import loginSignup from "./Pages/loginSignup";

console.log("Rendering App component");
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<shopCategory category = "men"/>}/>
          <Route path='/womens' element={<shopCategory category = "women"/>}/>
          <Route path='/kids' element={<shopCategory category = "kid"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<loginSignup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
