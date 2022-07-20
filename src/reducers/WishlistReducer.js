import { isItemInBucket } from "./isItemInBucket";

const WishlistReducer = (wishlistState, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return {...wishlistState, itemsInWishlist: wishlistState.itemsInWishlist + 1, wishlist: addToWishlist(wishlistState.wishlist, action.payload)};
        
        case "REMOVE_FROM_WISHLIST":
            return {...wishlistState, itemsInWishlist: wishlistState.itemsInWishlist - 1, wishlist: removeFromWishlist(wishlistState.wishlist, action.payload)};
        default:
            return wishlistState;
    }
}

const addToWishlist = (wishlist, product) => {
    if(!isItemInBucket(wishlist,product)){
        return [...wishlist, product];
    }
}

const removeFromWishlist = (wishlist, product) => {
    if(wishlist.length>1)
        return wishlist.filter(currentItem => currentItem.name !== product.name);
    else
        return [];
}


export {WishlistReducer}