import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './pages/menu';
import Header from './components/header';
import Home from './pages/home';
import Contact from './pages/contact';
import Cart from './pages/cart';
import Login from './pages/login';


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
        </Routes>
      </main>
    
  );
};

export default App;
