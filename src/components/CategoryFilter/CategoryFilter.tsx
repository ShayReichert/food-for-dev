import { useCategoryFilterViewModel } from "./categoryFilter.viewmodel";
import { ICategoryGateway } from "@/infrastructure/gateways/category.gateway";

interface CategoryFilterProps {
  categoryGateway: ICategoryGateway;
  onSelectCategory: (categoryId: number) => void;
}

export default function CategoryFilter({ categoryGateway, onSelectCategory }: CategoryFilterProps) {
  const { categories, selectedCategory, handleCategoryClick } = useCategoryFilterViewModel(categoryGateway, onSelectCategory);

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`px-4 py-2 rounded-full ${selectedCategory === category.id ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
