import { calculateDiscountedPrice } from "../discount";

describe("calculateDiscountedPrice", () => {
  it("calculates the discounted price correctly", () => {
    const price = 100;
    const discountPercentage = 20;
    const discountedPrice = calculateDiscountedPrice(price, discountPercentage);

    expect(discountedPrice).toBe(80);
  });

  it("rounds the discounted price to two decimal places", () => {
    const price = 99.99;
    const discountPercentage = 15;
    const discountedPrice = calculateDiscountedPrice(price, discountPercentage);

    expect(discountedPrice).toBe(84.99);
  });

  it("returns 0 if the discount percentage is 100", () => {
    const price = 100;
    const discountPercentage = 100;
    const discountedPrice = calculateDiscountedPrice(price, discountPercentage);

    expect(discountedPrice).toBe(0);
  });
});
