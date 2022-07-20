
const WishlistReducer = (wishlistState, action) => {
    switch (action.type) {
        case "SET_WISHLIST":
            return {...wishlistState, itemsInWishlist: updateItems(action.payload), wishlist: action.payload};
        
        default:
            return wishlistState;
    }
}

function updateItems(wishlist){
    return wishlist.length;
}

export {WishlistReducer}