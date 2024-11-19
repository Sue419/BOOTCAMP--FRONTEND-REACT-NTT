import { Category, CategoryResponse } from "../../types/category";

export const mapperCategories = (category: CategoryResponse): Category => {
    return {
        slug: category.slug,
        name: category.name,
    };
}
