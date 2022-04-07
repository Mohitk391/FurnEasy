import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (cartState,action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {...cartState, item: cartState.item+1, cartList: [...cartState.cartList, action.payload]};
        case "REMOVE_FROM_CART":
            return {...cartState, item: cartState.item-1}
        default: 
            return cartState;
    }
}


const CartProvider = ({children}) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, {
        items: 0,
        cartList: []
    });


    return (
        <CartContext value={{cartState,cartDispatch}}>
            {children}
        </CartContext>
    );
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider};