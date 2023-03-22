import "./cart-icon.styles.scss";
import { useContext } from "react";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from '../contexts/cart.context';
const CartIcon = () => {
  const { opened, setOpened } = useContext(CartContext);

  const cartIconHandler = () => {
    setOpened(!opened)
  }
  return (
       <div className="cart-icon-container">
        <ShoppingBagIcon className="shopping-icon" onClick={cartIconHandler}/>
        <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
