import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Cart} from './pages/cart/Cart';
import { Homepage } from './pages/homepage/HomePage';
import { ProductListing } from './pages/productlisting/ProductListing';
import {Wishlist} from "./pages/wishlist/Wishlist";
import {Login, SignUp} from "./pages/authentication/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />  
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>      
    </div>
  );
}

export default App;
