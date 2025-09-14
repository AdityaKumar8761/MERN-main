import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './Context/cart';  

// import { CounterProvider } from './Context/counter'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CounterProvider>
      <App />
    </CounterProvider> */}
    <CartProvider>

    <App />
    </CartProvider>
  </React.StrictMode>
);
