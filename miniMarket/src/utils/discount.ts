export const calculateDiscountedPrice = (price: number, discountPercentage: number): number => {
    const discountValue = price * (discountPercentage / 100);
    const discountedPrice = price - discountValue;
    return Math.round(discountedPrice * 100) / 100;
};