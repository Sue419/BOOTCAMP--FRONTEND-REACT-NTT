import { mapperGetProducts } from "../mapper/mapperGetProduct";
import { mockApiResponse } from "../__mocks__/productsMock";

describe("mapperGetProducts", () => {
  it("maps the API response correctly", () => {
    const apiProduct = mockApiResponse.products[0];

    const product = mapperGetProducts(apiProduct);

    expect(product).toHaveProperty("id", apiProduct.id);
    expect(product).toHaveProperty("title", apiProduct.title);
    expect(product).toHaveProperty("price", apiProduct.price);
    expect(product).toHaveProperty("image", apiProduct.images);
    expect(product).toHaveProperty("brand", apiProduct.brand || "No brand");
    expect(product).toHaveProperty("tags", apiProduct.tags || []);
  });
});
