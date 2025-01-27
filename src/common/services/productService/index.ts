import { PRODUCTS_BASE_URL } from "../../constants/endpoints";
import { Http } from "../../interfaces/http.interface";
import { ProductService as IProductService } from "../../interfaces/productService.interface";
import { Product } from "../../types/product";

const ProductService = (http: Http): IProductService => {
  return {
    fetchProducts: async () => {
      try {
        const data = await http.get<{ products: Product[] }>(PRODUCTS_BASE_URL);
        return data.products;
      } catch {
        throw new Error("Erro ao buscar todos os produtos!");
      }
    },
    fetchProductById: async (id: number) => {
      try {
        const data = await http.get<{ products: Product[] }>(PRODUCTS_BASE_URL);
        return data.products.find((product) => product.id === id);
      } catch {
        throw new Error("Erro ao buscar produto por id!");
      }
    },
  };
};

export default ProductService;
