import React, { useState } from 'react';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
function App() {
  const [isCart, setIsCart] = useState(false);

  const showCart = () => {
    setIsCart(true);
  }

  const hideCart = () => {
    setIsCart(false);
  }

  return (
    <CartProvider>
      {isCart && <Cart onClose={hideCart}/>}
      <Header onShowCart={showCart}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
