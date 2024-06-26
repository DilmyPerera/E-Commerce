import './App.css';
import Navbar from './Componenets/Navbar/Navbar';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './Componenets/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory category="womens"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        
        
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
