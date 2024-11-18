export const mapperGetProducts = (product) => {
    return {
        id: product.id,
        title: product.title,
        description: product.description,
        category: product.category,
        price: product.price,
        discountPercentage: product.discountPercentage,
        stock: product.stock,
        tags: product.tags || [],
        brand: product.brand,
        image: product.image || product.thumbnail,
    };
};
