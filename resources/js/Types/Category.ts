interface CategoryProps {
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
  parent_id: number | null;
}

interface CategoryItemProps {
  categoryId: string;
  categoriesByParent: { [key: string]: Category[] };
}

export { Category, CategoryProps, CategoryItemProps };
