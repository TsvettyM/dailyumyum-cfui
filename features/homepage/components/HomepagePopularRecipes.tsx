import { useState } from "react";
import IconArrow from "@/features/icons/components/IconArrow";
import HomepagePopularRecipesBox from "./HomepagePopularRecipesBox";
import Link from "next/link";
import HomepagePopularRecipesCarouselButtons from "./HomepagePopularRecipesCarouselButtons";

const HomepagePopularRecipes = () => {
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(0);

  const recipes = [
    {
      isLiked: true,
      share: "share",
      image: "/images/intro-img.png",
      title: "Tteokbokki",
      description:
        "Tteokbokki is one of the most popular Korean street foods in Korea.",
      time: 20,
      rating: 4.5,
      meals: 4,
      yums: 550,
    },
    {
      isLiked: true,
      share: "share",
      image: "/images/intro-img.png",
      title: "Bibimbap",
      description:
        "Bibimbap is a traditional Korean rice dish with mixed vegetables and beef.",
      time: 30,
      rating: 4.7,
      meals: 2,
      yums: 420,
    },
    {
      isLiked: true,
      share: "share",
      image: "/images/intro-img.png",
      title: "Kimchi",
      description:
        "Kimchi is a famous Korean side dish made of fermented vegetables.",
      time: 15,
      rating: 4.6,
      meals: 5,
      yums: 610,
    },
  ];

  const handleRecipeSelect = (index) => {
    setSelectedRecipeIndex(index);
  };

  return (
    <div className="homepage__popular--recipes flex py-20 w-full">
      <div className="container mb-20 flex flex-col items-start justify-start w-full">
        <div className="flex justify-between items-center w-full mb-14">
          <h1 className="text-24 font-bold text-green">
            OUR MOST POPULAR RECIPES
          </h1>

          <Link
            href="/"
            className="flex items-center font-medium text-[#AFACAC]"
          >
            View All
            <IconArrow className="ml-2" />
          </Link>
        </div>

        <div className="recipes__list relative mt-10 flex flex-col gap-10 w-full">
          <div className="flex gap-10 w-full">
            {/* Map through the recipes array */}
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-transform duration-300 ${
                  selectedRecipeIndex === index
                    ? "transform -translate-y-5"
                    : ""
                }`}
                onClick={() => handleRecipeSelect(index)}
              >
                <HomepagePopularRecipesBox {...recipe} />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center w-full mt-10">
            <HomepagePopularRecipesCarouselButtons
              selectedIndex={selectedRecipeIndex}
              totalItems={recipes.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepagePopularRecipes;
