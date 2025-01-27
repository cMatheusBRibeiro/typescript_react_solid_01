import { Product } from "../types/product";

export interface ProductService {
  getAllProducts: () => Promise<Product[]>;
  getProductById: (id: number) => Promise<Product | undefined>;
}
