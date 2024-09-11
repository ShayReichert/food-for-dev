import { ICategoryGateway } from "@/infrastructure/gateways/category.gateway";
import { useEffect, useState } from "react";

export const useCategoryFilterViewModel = (categoryGateway: ICategoryGateway, onSelectCategory: (categoryId: number) => void) => {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await categoryGateway.fetchCategories();
        setCategories(categoriesData);

        if (categoriesData.length > 0) {
          const firstCategoryId = categoriesData[0].id;
          setSelectedCategory(firstCategoryId);
          onSelectCategory(firstCategoryId);
        }
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, [categoryGateway]);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
    onSelectCategory(categoryId);
  };

  return {
    categories,
    selectedCategory,
    handleCategoryClick,
  };
};
