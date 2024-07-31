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
  return (
    <section className="recipe__view py-20">
      <div className="container relative flex flex-col items-center justify-center">
        <div className="recipe flex flex-col-reverse md:flex-row justify-center items-center w-full mb-8 md:mb-20">
          <div className="left flex flex-col justify-center items-center md:justify-start md:items-start mr-0 lx:mr-auto mt-32 md:mt-0">
            <h1 className="text-36 md:text-[60px] lg:text-64 font-bold mb-3">
              <span className="flex items-end">
                {recipe?.title}
                <span className="relative bottom-4 md:bottom-6 ml-1 block h-2 md:h-2.5 w-2 md:w-2.5 rounded-2 bg-green" />
              </span>
            </h1>

            <p className="lg:text-20 text-center md:text-start font-medium max-w-full md:max-w-[358px] lg:max-w-[460px] mb-5 md:mb-10 lg:mb-14">
              {recipe?.description}
            </p>
          </div>

          <div className="right relative flex flex-col items-center justify-center ml-0 md:ml-auto">
            <IconRecipe className="absolute -right-24 sm:-right-20 -top-14 w-[380px] sm:w-[440px] lg:w-[488px]" />

            <div className="relative -bottom-10 md:-bottom-6 lg:bottom-2 left-8 md:left-3 lg:left-8 h-[180px] sm:h-[200px] lg:h-[270px] w-[200px] sm:w-[270px] lg:w-[343px]">
              <Image
                src="/images/intro-img.png"
                alt=""
                fill
                draggable={false}
              />
            </div>

            <p className="flex flex-col items-center justify-center absolute -right-11 sm:right-3 lg:-right-6 -bottom-14 lg:bottom-11">
              <IconTime className="w-[23px] h-[22px] lg:right-5 -top-10" />
              20 min
            </p>

            <p className="flex flex-col items-center justify-center absolute -top-2 sm:-top-5 lg:-top-7 right-10 sm:right-24 lg:right-20">
              <IconYums className="w-14 h-[23px]" />
              550
            </p>

            <p className="flex flex-col items-center justify-center absolute top-14 sm:top-8 -left-7 sm:-left-6 lg:left-3">
              <IconRating className="w-[23px] h-[22px]" />
              4.5
            </p>
          </div>
        </div>

        <div className="products--list flex flex-col justify-start items-start mt-4 md:my-10 mr-0 md:mr-auto">
          <h2 className="text-28 sm:text-32 font-bold mb-5">
            <span className="flex justify-center items-end">
              Needed Products
              <span className="relative bottom-3 ml-1 block h-2 md:h-2.5 w-2 md:w-2.5 rounded-2 bg-green" />
            </span>
          </h2>

          <div className="ml-7">
            <p className="flex justify-start items-start font-medium max-w-full lg:max-w-[1000px] mb-4">
              <span className="relative flex-shrink-0 top-2 mr-2 block h-1.5 w-1.5 rounded-2 bg-green" />
              {recipe?.products}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeView;
