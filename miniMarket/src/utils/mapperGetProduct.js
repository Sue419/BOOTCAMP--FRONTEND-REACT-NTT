// podr'ias tener una carpeta mmaper donde solo este estas funcionalidades
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
        availabilityStatus: product.availabilityStatus,
        image: product.image || product.thumbnail,
    };
};
