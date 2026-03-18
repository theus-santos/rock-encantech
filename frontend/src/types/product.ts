import type {Category} from "./category";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image_url: string | null;
  category: Category | null;
  created_at: string;
  updated_at: string;
};

export type ProductsResponse = {
  success: boolean;
  message: string;
  data: Product[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
  links: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
};