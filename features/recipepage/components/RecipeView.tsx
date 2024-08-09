import IconRecipe from "../../icons/components/IconRecipe";
import Image from "next/image";
import IconYums from "../../icons/components/IconYums";
import IconTime from "../../icons/components/IconTime";
import IconRating from "../../icons/components/IconRating";
import { IRecipeList } from "@/pages/admin/recipes";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const RecipeView = () => {
  const [recipe, setRecipe] = useState<IRecipeList | null>(null);
  const router = useRouter();
  const [error, setError] = useState<string>("");

  console.log(recipe);

  useEffect(() => {
    if (router.query.id) {
      axios
        .get(`http://localhost:3001/recipes/${router.query.id}`)
        .then((res) => {
          setRecipe(res.data);
        })
        .catch((err) => {
          setError("There was an error fetching the recipe.");
          console.log(err);
        });
    }
  }, [router.query.id]);

  const productsArray = recipe?.products.split(",") || [];

  return (
    <div className="recipe__view py-20">
      <div className="container relative flex flex-col items-center justify-center">
        <div className="recipe flex flex-col-reverse md:flex-row justify-center items-center h-full w-full mb-8 md:mb-20">
          <div className="left__side flex flex-col justify-center items-center md:justify-start md:items-start mr-0 lx:mr-auto mt-32 md:mt-0">
            <h1 className="text-36 md:text-[54px] lg:text-64 font-bold mb-3">
              <span className="flex items-end">
                {recipe?.title}
                <span className="relative bottom-4 md:bottom-6 ml-1 block h-2 md:h-2.5 w-2 md:w-2.5 rounded-2 bg-green" />
              </span>
            </h1>

            <p className="lg:text-20 text-center md:text-start font-medium max-w-full md:max-w-[400px] lg:max-w-[500px] mb-5 md:mb-10 lg:mb-14">
              {recipe?.description}
            </p>
          </div>

          <div className="right__side relative flex flex-col items-center justify-center ml-0 md:ml-auto mb-0 md:mb-[50px]">
            <IconRecipe className="absolute -right-24 sm:-right-20 -top-14 w-[360px] sm:w-[380px] md:w-[400px] lg:w-[480px]" />

            <div className="relative -bottom-14 sm:-bottom-10 md:-bottom-6 lg:-bottom-6 left-8 sm:left-4 md:left-3 lg:left-0 h-[160px] sm:h-[180px] md:h-[200px] lg:h-[250px] w-[180px] sm:w-[200px] md:w-[240px] lg:w-[290px]">
              <Image
                src="/images/recipe-card-img.png"
                alt=""
                fill
                draggable={false}
              />
            </div>

            <p className="flex flex-col items-center justify-center absolute -right-16 sm:-right-11 md:-right-2 lg:-right-6 -bottom-16 sm:-bottom-5 md:-bottom-14 lg:-bottom-5">
              <IconTime className="w-[23px] h-[22px] lg:right-5 -top-10" />
              20 min
            </p>

            <p className="flex flex-col items-center justify-center absolute top-2 sm:-top-2 md:-top-3 lg:-top-7 right-10 md:right-20 lg:right-20">
              <IconYums className="w-14 h-[23px]" />
              550
            </p>

            <p className="flex flex-col items-center justify-center absolute top-14 sm:top-8 -left-7 sm:-left-6 lg:-left-12">
              <IconRating className="w-[23px] h-[22px]" />
              4.5
            </p>
          </div>
        </div>

        <div className="products__list flex flex-col justify-center sm:justify-start items-center sm:items-start mt-4 md:my-10 mr-0 md:mr-auto h-full w-full">
          <h2 className="text-28 md:text-32 lg:text-36 font-bold mb-6">
            <span className="flex justify-center items-end">
              Needed Products
              <span className="relative bottom-3 ml-1 block h-2 md:h-2.5 w-2 md:w-2.5 rounded-2 bg-green" />
            </span>
          </h2>

          <div className="ml-0 sm:ml-4 w-full">
            {productsArray.map((product, index) => (
              <p
                key={index}
                className="flex justify-start items-start font-medium max-w-full lg:max-w-[1000px] mb-4"
              >
                <span className="relative flex-shrink-0 top-2 mr-2 block h-1.5 w-1.5 rounded-2 bg-green" />
                {product.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeView;
