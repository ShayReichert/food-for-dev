import { useState } from "react";

interface Recipe {
  id: string;
  name: string;
  instructions: string;
  nutriscore: string;
  imageUrl: string;
  rating: number;
  time: string;
  isFavorited: boolean;
}

interface RecipeProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeProps> = ({ recipe }) => {
  const [isFavorited, setIsFavorited] = useState(recipe.isFavorited);
  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
    // Add logic to save state to the backend
  };

  return (
    <li key={recipe.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative h-0 pb-[60%]">
        <img src={recipe.imageUrl} alt={recipe.name} className="absolute top-0 w-full h-full object-cover rounded-t-lg" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold truncate w-3/4">{recipe.name}</h2>
          <span className="flex items-center text-gray-700 whitespace-nowrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="w-4 h-4 text-yellow-500 mr-1 align-middle"
            >
              <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
            </svg>
            {recipe.rating}
          </span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500">{recipe.time} min</span>
          <button className={`text-red-500 hover:text-red-600 ${isFavorited ? "fill-current" : "stroke-current"}`} onClick={handleFavoriteClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isFavorited ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 align-middle"
            >
              <path
                fillRule="evenodd"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default RecipeCard;
