import { Category, CategoryResponse } from "../../domain/category";

export const mapperCategories = (category: CategoryResponse): Category => {
    return {
        slug: category.slug,
        name: category.name,
    };
}
