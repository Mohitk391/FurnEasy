import { isItemInBucket } from "./isItemInBucket";

const cartReducer = (cartState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...cartState, items: cartState.items + 1, cartList: addToCart(action.payload, cartState.cartList) };
        case "REMOVE_FROM_CART":
            return { ...cartState, items: cartState.items - 1, cartList: removeFromCart(action.payload, cartState.cartList) };
        default:
            return cartState;
    }
};

function addToCart(product, cartList) {
    var updatedCart = [];
    if (isItemInBucket(cartList, product)) {
    updatedCart = cartList.map((currentItem) => {
        if (currentItem.name === product.name) {
            return { ...currentItem, count: currentItem.count + 1 };
        } else {
            return currentItem;
        }
    });
        return updatedCart;
    } else {
        return [...cartList, {...product, count: 1}]
    }
}

function removeFromCart(product, cartList){
    var updatedCart = [];
    updatedCart = cartList.map(currentItem=>{
        if(currentItem.name === product.name){
            if(currentItem.count > 1){
                return {...currentItem, count: currentItem.count - 1};
            }
            else {
                return {...currentItem, count: 0};
            }
        }
        else {
            return currentItem;
        }
    });
    updatedCart = updatedCart.filter((currentItem)=>currentItem.count>0);
    return updatedCart;
}

export {cartReducer}