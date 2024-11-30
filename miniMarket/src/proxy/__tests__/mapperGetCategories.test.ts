import { mapperCategories } from "../mapper/mapperGetCategories";
import { Category, CategoryResponse } from "../../domain/category";

describe("mapperCategories", () => {
  it("correctly maps a CategoryResponse to Category", () => {
    const categoryResponse: CategoryResponse = {
      slug: "electronics",
      name: "Electronics",
      url: "/categories/electronics",
    };

    const category: Category = mapperCategories(categoryResponse);

    expect(category).toHaveProperty("slug", "electronics");
    expect(category).toHaveProperty("name", "Electronics");

    expect(category).not.toHaveProperty("url");
  });
});
