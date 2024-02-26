import { CircleIcon } from '@/Components';
import { Category, CategoryItemProps, CategoryProps } from '@/Types/Category';

const categorize = (categories: Category[]): { [key: string]: Category[] } => {
  return categories.reduce((acc: { [key: string]: Category[] }, category) => {
    const parent = category.parent_id?.toString() || 'root';
    if (!acc[parent]) {
      acc[parent] = [];
    }
    acc[parent].push(category);
    return acc;
  }, {});
};

const CategoryItem: React.FC<CategoryItemProps> = ({
  categoryId,
  categoriesByParent,
}) => {
  const subcategories = categoriesByParent[categoryId];
  return (
    <>
      {subcategories &&
        subcategories.map(subcategory => (
          <div key={subcategory.id} className="flex flex-col space-y-2">
            <div className="flex items-center mr-2 mt-1">
              <CircleIcon
                className={
                  subcategory.parent_id ? 'text-gray-400' : 'text-green-500'
                }
              />
              <span
                className={`font-semibold mr-2 ${
                  subcategory.parent_id ? '' : 'mr-2'
                }`}
              >
                {subcategory.name}
              </span>
            </div>
            {categoriesByParent[subcategory.id.toString()] && (
              <div className="flex flex-col mr-4 mt-2 space-y-2 border-r-2 border-gray-300">
                <CategoryItem
                  categoryId={subcategory.id.toString()}
                  categoriesByParent={categoriesByParent}
                />
              </div>
            )}
          </div>
        ))}
    </>
  );
};

const Aside = ({ categories }: CategoryProps) => {
  const categoriesByParent = categorize(categories);

  return (
    <aside className="w-full lg:w-72 pr-2">
      <div className="flex flex-col">
        {categoriesByParent['root'] && (
          <CategoryItem
            categoryId="root"
            categoriesByParent={categoriesByParent}
          />
        )}
      </div>
    </aside>
  );
};
export default Aside;
