import React from 'react';

import './scss/app.scss';
// import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import FullPizza from './pages/FullPizza';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';

// useSelector == useContext
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './redux/slices/filterSlice';

// import Skeleton from './components/PizzaBlock/Skeleton';
// import pizzas from './assets/pizzas.json';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
