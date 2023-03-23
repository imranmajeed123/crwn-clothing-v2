import { useContext, useEffect } from "react";
import { CartContext } from "../../components/contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ product }) => {
 
  const { addItemToCart, removeItemFromCart, removeAllItemsForProduct, cartItems } =
    useContext(CartContext);

  const addItemToCartHandler = () => addItemToCart(product);
  const removeItemToCartHandler = () => removeItemFromCart(product);
  const removeAllItemsForProductHandler = () => removeAllItemsForProduct(product);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={product.imageUrl} alt={`${product.name}`} />
      </div>
      <span className="name">{product.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemToCartHandler}>
          &#10094;
        </div>
        {product.quantity}
        <div className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{product.price}</span>
      <div className="remove-button" onClick={removeAllItemsForProductHandler}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
