import { teslaApi } from "@/api/teslaApi";
import type { ProductsResponse } from "@/interfaces/products.response";

export interface GetProductsActionOptions {
  limit?: number | string;
  offset?: number | string;
  gender?: string;
  sizes?: string;
  minPrice?: number;
  maxPrice?: number;
  query?: string;
}

export const getProductsAction = async (
  options: GetProductsActionOptions
): Promise<ProductsResponse> => {
  try {
    const { limit, offset, gender, sizes, minPrice, maxPrice, query } = options;
    const { data } = await teslaApi.get<ProductsResponse>("/products", {
      params: {
        limit,
        offset,
        gender,
        sizes,
        minPrice,
        maxPrice,
        q: query,
      },
    });

    const productsWithImageUrls = data.products.map(product => ({
      ...product,
      images: product.images.map(
        image => `${import.meta.env.VITE_API_URL}/files/product/${image}`
      ),
    }));

    return {
      ...data,
      products: productsWithImageUrls,
    };

    return data;
  } catch (e) {
    console.log(e);
    return {
      count: 0,
      pages: 0,
      products: [],
    };
  }
};
