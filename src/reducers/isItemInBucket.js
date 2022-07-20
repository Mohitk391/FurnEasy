export const isItemInBucket = (bucket, product) => {
    var flag = false;
    flag = bucket.some(current => {
        if (current.name === product.name) {
            return true;
        }
    });
    return flag;
};
