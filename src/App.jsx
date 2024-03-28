import Cart from "./Component/Cart";
import Checkout from "./Component/Checkout";
import Header from "./Component/Header";
import Meals from "./Component/Meals";
import { CartContextProvider } from "./Context/CartContext";
import { UserProgressContextProvider } from "./Context/UserProgressContext";


function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
      <Header />
        <Meals />
        <Cart />
        <Checkout/>
    </CartContextProvider>
    </UserProgressContextProvider>
   
  );
}

export default App;
