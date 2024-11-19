import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
console.log('Rendering App component');
function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
     
<Routes>
  <Route path="/" element={<Shop />} />
  <Route path="/mens" element={<ShopCategory category="men" />} />
  <Route path="/womens" element={<ShopCategory category="women" />} />
  <Route path="/kids" element={<ShopCategory category="kid" />} />
  <Route path="/product" element={<Product />} />
  <Route path="/product/:productId" element={<Product />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/login" element={<loginSignup />} />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
