import React, { useContext } from 'react'
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../Context/CartContext';
import UserProgressContext from '../Context/UserProgressContext';
const Header = () => {

  
  const cartCxt = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartCxt.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
   }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
   }
  
  return (
    <header id='main-header'>
          <div id='title'>
              <img src={logo} alt="" />
              <h1>FoodieFlow</h1>
          </div>
          <nav>
        <Button textOnly onClick = {handleShowCart} >Cart ({totalCartItems})</Button>
          </nav>
    </header>
  )
}

export default Header
