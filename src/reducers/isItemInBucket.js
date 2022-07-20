export const isItemInBucket = (bucket, product) => {
    const item = bucket.find(element=> element._id===product._id);
    return item ? true : false;
};
