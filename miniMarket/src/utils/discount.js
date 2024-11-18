export const calculateDiscountedPrice = (price, discountPercentage) => {
    const discountValue = price * (discountPercentage / 100);
    const discountedPrice = price - discountValue;
    return discountedPrice.toFixed(2);
};