import CommonButton from "../common/components/CommonButton";
import IconRecipe from "../icons/components/IconRecipe";
import Image from "next/image";
import IconYums from "../icons/components/IconYums";
import IconTime from "../icons/components/IconTime";
import IconRating from "../icons/components/IconRating";

const RecipeView = () => {
  return (
    <section className="recipe__view py-20">
      <div className="container relative flex flex-col items-center justify-center">
        <div className="recipe flex justify-center items-center w-full mb-20">
          <div className="left flex flex-col mr-auto">
            <h1 className="text-64 font-bold mb-3">
              <span className="flex items-end">
                Tteokkbeokki
                <span className="relative bottom-6 ml-1 block h-2.5 w-2.5 rounded-2 bg-green" />
              </span>
            </h1>

            <p className="text-20 text-start font-medium max-w-[460px] mb-14">
              Tteokbokki, a beloved Korean street food, is a spicy and savory
              dish made primarily from chewy rice cakes called "tteok" and a
              flavorful sauce. Originating from Korea, this dish has become an
              integral part of Korean cuisine and is enjoyed by people of all
              ages.
            </p>

            <CommonButton
              type="button"
              href=""
              title="How to make"
              style="border"
              className="!w-[159px] h-[33px] !rounded-10"
            />
          </div>

          <div className="right relative flex flex-col items-center justify-center ml-auto">
            <IconRecipe className="absolute -right-20 -top-14 w-[488px]" />

            <div className="relative bottom-2 left-8 h-[278px] w-[343px]">
              <Image
                src="/images/intro-img.png"
                alt=""
                fill
                draggable={false}
              />
            </div>

            <p className="flex flex-col items-center justify-center absolute -right-6 bottom-11">
              <IconTime className="w-[23px] h-[22px] right-5 -top-10" />
              20 min
            </p>

            <p className="flex flex-col items-center justify-center absolute -top-7 right-20">
              <IconYums className="w-14 h-[23px]" />
              550
            </p>

            <p className="flex flex-col items-center justify-center absolute top-8 left-3">
              <IconRating className="w-[23px] h-[22px]" />
              4.5
            </p>
          </div>
        </div>

        <div className="ingredient--list flex flex-col justify-start items-start my-10 mr-auto">
          <h2 className="text-32 font-bold mb-5">
            <span className="flex justify-center items-end">
              Needed Ingredients
              <span className="relative bottom-3 ml-1 block h-2.5 w-2.5 rounded-2 bg-green" />
            </span>
          </h2>

          <div className="ml-7">
            <h3 className="text-20 font-medium mb-4">Main:</h3>
            <p className="flex justify-start items-start text-16 font-medium max-w-[1000px] mb-4">
              <span className="relative top-2 mr-2 block h-1.5 w-1.5 rounded-2 bg-green" />
              Tteok (Rice Cakes): 500g of cylindrical or sliced rice cakes,
              usually found in the refrigerated or frozen section of Korean or
              Asian grocery stores.
            </p>

            <p className="flex justify-start items-start text-16 font-medium mb-4">
              <span className="relative top-2 mr-2 block h-1.5 w-1.5 rounded-2 bg-green" />
              Eomuk (Fish Cakes): 150g of Korean fish cakes, sliced into
              bite-sized pieces.
            </p>

            <p className="flex justify-start items-start text-16 font-medium">
              <span className="relative top-2 mr-2 block h-1.5 w-1.5 rounded-2 bg-green" />
              Boiled Eggs: 2-3 boiled eggs (optional but common).
            </p>

            <h3 className="text-20 font-medium mt-14 mb-4">Sauce:</h3>
            <p className="flex justify-start items-start text-16 font-medium mb-4">
              <span className="relative top-2 mr-2 block h-1.5 w-1.5 rounded-2 bg-green" />
              Gochujang (Korean Red Chili Paste): 2-3 tablespoons.
            </p>

            <p className="flex justify-start items-start text-16 font-medium mb-4">
              <span className="relative top-2 mr-2 block h-1.5 w-1.5 rounded-2 bg-green" />
              Gochugaru (Korean Red Chili Flakes): 1-2 teaspoons (adjust to
              taste for spiciness).
            </p>

            <p className="flex justify-start items-start text-16 font-medium mb-4">
              <span className="relative top-2 mr-2 block h-1.5 w-1.5 rounded-2 bg-green" />
              Soy Sauce: 2 tablespoons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeView;
