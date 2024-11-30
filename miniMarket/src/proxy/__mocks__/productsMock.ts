import { AvailabilityStatus, ReturnPolicy } from "@/domain/productApiResponse";

export const mockApiResponse = {
    products: [
      {
        id: 1,
        title: "Essence Mascara Lash Princess",
        description: "Mascara known for its volumizing effects.",
        category: "beauty",
        price: 9.99,
        discountPercentage: 7.17,
        stock: 5,
        tags: ["beauty", "mascara"],
        brand: "Essence",
        images: ["image_url_1", "image_url_2"],
        thumbnail: "thumbnail_url",
        rating: 4.5,
        sku: "12345",
        weight: 100,
        dimensions: { width: 0, height: 0, depth: 0 },
        warrantyInformation: "1 year",
        shippingInformation: "Ships in 2-3 days",
        availabilityStatus: AvailabilityStatus.InStock,
        reviews: [],
        returnPolicy: ReturnPolicy.The30DaysReturnPolicy,
        minimumOrderQuantity: 1,
        meta: {
          createdAt: new Date("2024-01-01T00:00:00Z"),
          updatedAt: new Date("2024-01-01T00:00:00Z"),
          barcode: "barcode_value",
          qrCode: "qr_code_value",
        },
      },
    ],
    total: 194,
    skip: 0,
    limit: 30,
  };
  
  // Mock del producto mapeado
  export const mockMappedProduct = {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description: "Mascara known for its volumizing effects.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 7.17,
    stock: 5,
    tags: ["beauty", "mascara"],
    brand: "Essence",
    image: ["image_url_1", "image_url_2"],
  };
  