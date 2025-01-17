import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './pages/menu';
import Header from './components/header';
import Home from './pages/home';
import Contact from './pages/contact';
import Cart from './pages/cart';
import Login from './pages/login';
import Orders from './pages/orders';
import Placeorder from './pages/placeorder';
import Verify from './pages/verify';

const App = () => {
  return (
    
      <main className='overflow-hidden text-[#404040] bg-primary'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/placeorder" element={<Placeorder />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </main>
    
  );
};

export default App;
