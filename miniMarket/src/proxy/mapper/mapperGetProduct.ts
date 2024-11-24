import { Product } from "../../domain/product";
import { ProductResponse } from "../../domain/productApiResponse";

export const mapperGetProducts = (product: ProductResponse ): Product => {
    return {
        id: product.id,
        title: product.title,
        description: product.description,
        category: product.category,
        price: product.price,
        discountPercentage: product.discountPercentage,
        stock: product.stock,
        tags: product.tags || [],
        brand: product.brand || 'No brand',
        image: product.images.length > 0 ? product.images : [product.thumbnail],
    };
};
