import { useContext, useState } from "react";
import { useEffect } from "react";
import { CartContext } from "../../components/contexts/cart.context";
import CheckoutItem from "../../components/chceckout-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  const [total, setTotal] = useState(0);
  useEffect(
    () =>
      setTotal(
        cartItems.reduce((sum, item) => item.price * item.quantity + sum, 0)
      ),
    [cartItems]
  );

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartIem) => (
        <CheckoutItem
          key={cartIem.id}
          product={cartIem}
          className="cart-item"
        />
      ))}
      <span className="total">Total : {total}</span>
    </div>
  );
};
export default Checkout;
