import { CATEGORIES_BASE_URL } from "../../constants/endpoints";
import { CategoryService as ICategoryService } from "../../interfaces/categoryService.interface";
import { Http } from "../../interfaces/http.interface";
import { Category } from "../../types/category";

const CategoryService = (http: Http): ICategoryService => {
  return {
    fetchCategories: async () => {
      try {
        const data = await http.get<{ categories: Category[] }>(
          CATEGORIES_BASE_URL
        );
        return data.categories;
      } catch {
        throw new Error("Erro ao buscar todas as categorias!");
      }
    },
  };
};

export default CategoryService;
