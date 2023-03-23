import "./cart-icon.styles.scss";
import { useContext, useEffect, useState } from "react";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from '../contexts/cart.context';
const CartIcon = () => {
  const { opened, setOpened, cartItems } = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);
  const cartIconHandler = () => {
    setOpened(!opened)
  }
  useEffect( ()=>
    setTotalItems(cartItems.reduce((sum, item)=> sum + item.quantity, 0))
  ,[cartItems]);
  return (
       <div className="cart-icon-container">
        <ShoppingBagIcon className="shopping-icon" onClick={cartIconHandler}/>
        <span className="item-count">{totalItems}</span>
    </div>
  );
};

export default CartIcon;
