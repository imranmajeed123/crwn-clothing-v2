import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const foundItem = cartItems.find((item) => item.id === productToAdd.id);
  if (foundItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, productToAdd) => {
  const foundItem = cartItems.find((item) => item.id === productToAdd.id);
  if (foundItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToAdd.id);
  }
  return cartItems.map((item) =>
    item.id === productToAdd.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
const removeAllCartItem = (cartItems, productToAdd) => {
  return cartItems.filter((item) => item.id !== productToAdd.id);
};

export const CartContext = createContext({
  opened: false,
  setOpened: () => null,
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeAllItemsForProduct: () => {},
});

export const CartProvider = ({ children }) => {
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };
  const removeItemFromCart = (product) => {
    setCartItems(removeCartItem(cartItems, product));
  };
  const removeAllItemsForProduct = (product) => {
    setCartItems(removeAllCartItem(cartItems, product));
  };

  const [opened, setOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const value = {
    opened,
    setOpened,
    addItemToCart,
    cartItems,
    removeItemFromCart,
    removeAllItemsForProduct,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
