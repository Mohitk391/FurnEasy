import { createContext, useContext, useReducer } from "react";
import { WishlistReducer } from "../reducers/WishlistReducer";

const iniitalState = {
    itemsInWishlist : 0,
    wishlist: []
}

const WishlistContext = createContext();

const WishlistProvider = ({children}) =>{
    const [wishlistState, wishlistDispatch] = useReducer(WishlistReducer, iniitalState)

    return (<WishlistContext.Provider value={{wishlistState, wishlistDispatch   }}>{children}</WishlistContext.Provider> );
}

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider};