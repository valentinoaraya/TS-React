import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './storage/cartContext';
import CartViewContainer from './components/CartViewContainer/CartViewContainer';
import BuyFinish from './components/BuyFinish/BuyFinish';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<CartViewContainer/>}/>
            <Route path='/buyfinish/:orderID' element={<BuyFinish/>}/>
            <Route path='/formcheckout' element={<Form/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </CartContextProvider>  
  );
}

export default App;