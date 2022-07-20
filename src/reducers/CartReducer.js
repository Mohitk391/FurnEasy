
const cartReducer = (cartState, action) => {
    switch (action.type) {
        case "SET_CART":
            return {...cartState,items: updateItems(action.payload), cartList: action.payload};
        default:
            return cartState;
    }
};

function updateItems(cartList){
    const items = cartList.reduce((acc,curr)=>acc+curr.qty,0);
    return items;
}

export {cartReducer}