const sortProductList = (order, products) => {
    switch (order) {
        case "HIGH_TO_LOW":
            return products.sort((a, b) => b.discountPrice - a.discountPrice);
        
        case "LOW_TO_HIGH":
            return products.sort((a, b) => a.discountPrice - b.discountPrice);

        default:
            return products;
    }
}

const filterProductsByRating = (ratingOrder, products) => {
    switch (ratingOrder) {
        case "FIVE_STARS":
            return products.filter(product=> product.rating === 5); 
        
        case "FOUR_STARS":
            return products.filter(product=> product.rating >= 4); 
        
        case "THREE_STARS":
            return products.filter(product=> product.rating >= 3); 

        case "TWO_STARS":
            return products.filter(product=> product.rating >= 2); 

        case "ONE_STAR":
            return products.filter(product=> product.rating >= 1); 

        default:
            return products;
    }
}

const showCategoricalProducts = (categories, products) => {
    if(categories.length === 0){
        return products;
    }
    return  products.filter(product=> categories.includes(product.category));
}

export {showCategoricalProducts, filterProductsByRating, sortProductList}