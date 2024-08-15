import { useState } from "react";

interface Recipe {
  id: string;
  name: string;
  imageUrl: string;
}

export const useCarouselViewModel = (recipes: Recipe[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? recipes.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === recipes.length - 1 ? 0 : prevIndex + 1));
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return {
    currentIndex,
    handlePrevClick,
    handleNextClick,
    handleIndicatorClick,
  };
};
