import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/CartReducer";

const CartContext = createContext();

const initialState = {
    items: 0,
    cartList: []
};

const CartProvider = ({children}) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, initialState);


    return (
        <CartContext.Provider value={{cartState,cartDispatch}}>
            {children}
        </CartContext.Provider>
    );
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider};