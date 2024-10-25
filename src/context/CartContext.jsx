import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [itemAmount, setItemAmount] = useState(0);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmt = cart.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.price * currentItem.amount,
      0
    );
    setTotal(totalAmt);
  }, [itemAmount]);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce(
        (accumulator, currentItem) => accumulator + currentItem.amount,
        0
      );
      setItemAmount(amount);
    }
  }, [cart]);

  function addToCart(product, id) {
    setCart((prevCart) => {
      const existingCart = prevCart.find((item) => item.id === id);

      if (existingCart) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, amount: 1 }];
      }
    });
  }

  function incAmount(id) {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id && item.amount < 10
          ? { ...item, amount: item.amount + 1 }
          : item
      );
    });
  }

  function decAmount(id) {
    setCart((prevCart) => {
      const moreThanOne = prevCart.find((item) => item.id === id);

      if (moreThanOne.amount > 1) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.id !== id);
      }
    });
  }

  function deleteFromCart(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decAmount,
        incAmount,
        deleteFromCart,
        clearCart,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
