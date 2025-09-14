import React from 'react';
// import Counter from './component/counter';
// import { CounterContext } from './Context/counter'
import Item from './component/item';
import Cart from './component/cart';


function App() {
  // const counterState = useContext(CounterContext);
  return (
    // <div>
    //   <h1>Contex API</h1>
    //   <h2>Count is {counterState.count}</h2>
    //   <Counter/>
    // </div>
    <div className='App'>
      <Item name="Macbook" price="100000"/>
      <Cart/>
    </div>

  );
}

export default App;
