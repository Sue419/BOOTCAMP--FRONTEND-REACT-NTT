import { fetchProducts } from "../fetchProducts";
import { mockApiResponse } from "../__mocks__/productsMock";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockApiResponse),
  })
) as jest.Mock;

describe("fetchProducts", () => {
  it("fetches products and maps the data correctly", async () => {
    const products = await fetchProducts();

    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);

    //mapper
    expect(products[0]).toHaveProperty("id", 1);
    expect(products[0]).toHaveProperty("title", "Essence Mascara Lash Princess");
    expect(products[0]).toHaveProperty("price", 9.99);
    expect(products[0]).toHaveProperty("brand", "Essence");
  });

  it("returns an empty array if the fetch fails", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.reject(new Error("Failed to fetch")),
      })
    ) as jest.Mock;

    const products = await fetchProducts();

    expect(products).toEqual([]);
  });
});
