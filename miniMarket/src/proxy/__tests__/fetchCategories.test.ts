import { fetchCategories } from "../fetchCategories";
import { mockApiCategoriesResponse } from "../__mocks__/categoriesMock";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockApiCategoriesResponse),
  })
) as jest.Mock;

describe("fetchCategories", () => {
  it("fetches categories and maps the data", async () => {
    const categories = await fetchCategories();

    expect(Array.isArray(categories)).toBe(true);
    expect(categories.length).toBeGreaterThan(0);

    expect(categories[0]).toHaveProperty("slug", "electronics");
    expect(categories[0]).toHaveProperty("name", "Electronics");
  });

  it("returns an empty array if the fetch fails", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.reject(new Error("Failed to fetch")),
      })
    ) as jest.Mock;

    const categories = await fetchCategories();

    expect(categories).toEqual([]);
  });
});
