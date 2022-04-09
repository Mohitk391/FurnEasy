import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
    items: 0,
    cartList: []
};

const cartReducer = (cartState,action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {...cartState, items: cartState.items+1, cartList: [...cartState.cartList, action.payload]};
        case "REMOVE_FROM_CART":
            return {...cartState, items: cartState.items-1}
        default: 
            return cartState;
    }
}


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