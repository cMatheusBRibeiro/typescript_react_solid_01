import { Product } from "../types/product";

export interface ProductService {
  fetchProducts: () => Promise<Product[]>;
  fetchProductById: (id: number) => Promise<Product | undefined>;
}
