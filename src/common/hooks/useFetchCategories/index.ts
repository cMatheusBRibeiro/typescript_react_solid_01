import { useState, useEffect } from "react";
import { CategoryService } from "../../interfaces/categoryService.interface";
import { Category } from "../../types/category";

const useFetchCategories = (categoryService: CategoryService) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    setIsLoading(true);

    try {
      const data = await categoryService.fetchCategories();
      setCategories(data);
    } catch {
      setError("Erro ao carregar dados!");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, isLoading, error, fetchCategories };
};

export default useFetchCategories;
