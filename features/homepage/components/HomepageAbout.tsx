import HomepageRecipe from "./HomepageRecipe";

const HomepageAbout = () => {
  return (
    <section className="homepage__section--about flex overflow-hidden py-10 md:py-20 px-0 md:px-20">
      <div className="container flex flex-col-reverse md:flex-row justify-center items-center relative">
        <HomepageRecipe isLatest={false} />

        <div className="right flex flex-col ml-0 md:ml-24 lg:ml-auto h-full">
          <h1 className="text-20 lg:text-24 text-green text-center md:text-right font-bold mb-8 md:mb-24 lg:mb-32">
            ABOUT DAILYUMYUM
          </h1>

          <p className="text-14 md:text-16 text-black text-center md:text-start font-medium max-w-[340px]">
            Our goal is to provide delicious and fun meals with detailed
            instruction on how to prepare them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomepageAbout;
