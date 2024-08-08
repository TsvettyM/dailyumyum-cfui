import CommonButton from "@/features/common/components/CommonButton";
import HomepageRecipe from "./HomepageRecipe";

const HomepageIntro = () => {
  return (
    <div className="homepage__intro overflow-hidden py-3 md:py-20">
      <div className="container relative flex flex-col items-center justify-center md:flex-row">
        <div className="left__side flex flex-col justify-center md:justify-start items-center md:items-start md:mr-auto">
          <h1 className="text-36 md:text-48 font-bold text-black lg:text-64">
            <span className="flex items-end justify-center md:justify-start">
              Daily recipes
              <span className="relative bottom-4 md:bottom-5 lg:bottom-6 ml-1 block h-2 md:h-2.5 w-2 md:w-2.5 rounded-2 bg-green" />
            </span>
            <span className="flex items-end justify-center md:justify-start">
              Daily yum
              <span className="relative bottom-4 md:bottom-5 lg:bottom-6 ml-1 block h-2 md:h-2.5 w-2 md:w-2.5 rounded-2 bg-green" />
            </span>
          </h1>
          <p className="mb-10 mt-5 text-center text-16 font-medium text-black md:max-w-[330px] md:text-start md:text-20 lg:max-w-[480px]">
            Discover a variety of culinary delights to impress with your loved
            ones and yourself.
          </p>

          <CommonButton
            type="button"
            href="/recipes"
            style="green"
            title="Explore our recipes"
            className="flex justify-center items-center h-8 w-full md:w-[203px]"
          />
        </div>

        <HomepageRecipe className="mt-14" />
      </div>
    </div>
  );
};

export default HomepageIntro;
