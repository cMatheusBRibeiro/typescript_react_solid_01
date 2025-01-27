import { useEffect, useState } from "react";
import { ProductService } from "../../interfaces/productService.interface";
import { Product } from "../../types/product";

const useFetchProducts = (productService: ProductService) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setIsLoading(true);

    try {
      const data = await productService.fetchProducts();
      setProducts(data);
    } catch {
      setError("Erro ao carregar dados!");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, isLoading, error, fetchProducts };
};

export default useFetchProducts;
