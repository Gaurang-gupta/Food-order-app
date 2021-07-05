import Header from "./components/Layout/Header";
import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  const displayHandler = ()=>{
    setCartIsShown((prevState)=>{
      return !prevState;
    })
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClick={displayHandler}/>}
      <Header onClick={displayHandler}/>
      <main>
          <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
