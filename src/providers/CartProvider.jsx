import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("success"); 
  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem._id === item._id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    
    
    setPopupMessage("Item added to cart successfully!");
    setPopupType("success");
    setShowPopup(true);
    
    
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };



  const showErrorPopup = (message) => {
    setPopupMessage(message);
    setPopupType("error");
    setShowPopup(true);
    
    
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const value = {
    cart,
    addToCart,
    showPopup,
    popupMessage,
    popupType,
    showErrorPopup
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider; 