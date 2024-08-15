import { useState } from "react";

interface Recipe {
  id: number;
  name: string;
  rating: number;
  total_time: number;
  cook_time: number;
  preparation_time: number;
  pause_time: number;
  difficulty: string;
  cost: string;
  nb_personne: number;
  nb_commentary: number;
  category_id: number;
}

export const useRecipeCardViewModel = (initiallyFavorited: boolean) => {
  const [isFavorited, setIsFavorited] = useState(initiallyFavorited);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
    // Add logic to save state to the backend if needed
  };

  return {
    isFavorited,
    handleFavoriteClick,
  };
};
