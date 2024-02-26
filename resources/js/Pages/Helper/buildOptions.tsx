import { Category } from '@/Types/Category';

export function buildOptions(
  categories: Category[],
  parentId: number | null,
  level: number = 0,
): JSX.Element[] {
  return categories
    .filter(c => c.parent_id === parentId)
    .flatMap(category => [
      <option key={category.id} value={category.id}>
        {`${'-'.repeat(level * 2)} ${category.name}`}
      </option>,
      ...buildOptions(categories, category.id, level + 1),
    ]);
}
