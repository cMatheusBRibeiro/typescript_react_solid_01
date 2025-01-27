import { Category } from "../types/category";

export interface CategoryService {
  fetchCategories: () => Promise<Category[]>;
}
