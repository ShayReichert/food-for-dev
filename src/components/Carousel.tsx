import React, { useState } from "react";

interface Recipe {
  id: string;
  name: string;
  imageUrl: string;
}

interface CarouselProps {
  recipes: Recipe[];
}

const Carousel: React.FC<CarouselProps> = ({ recipes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? recipes.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === recipes.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="carousel" className="relative px-8 bg-gray-100" data-twe-carousel-init data-twe-ride="carousel">
      {/* Carousel indicators */}
      <div className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-twe-carousel-indicators>
        {recipes.map((_, index) => (
          <button
            key={index}
            data-twe-target="#carousel"
            data-twe-slide-to={index}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
              index === currentIndex ? "opacity-100" : ""
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      {/* Carousel items */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {recipes.map((recipe, index) => (
          <div
            key={recipe.id}
            className={`relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none ${
              index === currentIndex ? "opacity-100" : ""
            }`}
            data-twe-carousel-fade
            data-twe-carousel-item
            data-twe-carousel-active={index === currentIndex}
          >
            <div className="relative w-full pb-[80%] md:pb-[30%]">
              {/* Ratio 126:35 */}
              <img src={recipe.imageUrl} className="absolute inset-0 block w-full h-full object-cover rounded-xl" alt={recipe.name} />
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <h5 className="text-xl bg-black bg-opacity-50 p-2 rounded">{recipe.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls - prev item */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carousel"
        data-twe-slide="prev"
        onClick={handlePrevClick}
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
      </button>

      {/* Carousel controls - next item */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carousel"
        data-twe-slide="next"
        onClick={handleNextClick}
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
