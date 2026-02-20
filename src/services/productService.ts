export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const BASE_URL = "https://dummyjson.com";

export const fetchAllProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products?limit=30`);
  if (!res.ok) throw new Error("Failed to fetch products");
  const data: ProductsResponse = await res.json();
  return data.products;
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};
