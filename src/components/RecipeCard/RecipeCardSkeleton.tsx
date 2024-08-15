const RecipeCardSkeleton: React.FC = () => {
  return (
    <li className="bg-white rounded-lg shadow transition-shadow overflow-hidden animate-pulse">
      <div className="relative h-0 pb-[60%] bg-white"></div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="h-4 bg-white rounded w-3/4"></div>
          <div className="h-4 bg-white rounded w-1/4"></div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="h-4 bg-white rounded w-1/3"></div>
          <div className="h-5 w-5 bg-white rounded-full"></div>
        </div>
      </div>
    </li>
  );
};

export default RecipeCardSkeleton;
