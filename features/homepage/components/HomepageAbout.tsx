import CommonButton from "@/features/common/components/CommonButton";
import IconAbout from "@/features/icons/components/IconAbout";
import Image from "next/image";

const HomepageAbout = () => {
  return (
    <section className="homepage__about flex overflow-hidden py-10 md:py-20 px-0 md:px-20">
      <div className="container flex flex-col-reverse md:flex-row justify-center items-center relative">
        <div className="left flex flex-col justify-center items-center relative mr-0 md:mr-10 xl:mr-auto mt-20 md:mt-0">
          <IconAbout className="absolute w-[470px] md:w-[500px] lg:w-[587px]" />

          <div className="flex flex-col justify-center items-center relative">
            <p className="text-28 text-green text-center font-bold mb-5">
              Chipi Chipi
            </p>

            <div className="relative  h-[130px] sm:h-[151px] md:h-[180px] lg:h-[200px] w-[160px] sm:w-[180px] md:w-[210px] lg:w-[240px] mb-11">
              <Image
                src="/images/about-img.png"
                alt=""
                fill
                draggable={false}
              />
            </div>

            <CommonButton
              type="button"
              href="/"
              style="border"
              title="Get this recipe"
              className="relative w-[160px] md:w-[180px] lg:w-[193px] -left-4 md:-left-5 bottom-2.5 sm:bottom-6 md:bottom-8 lg:bottom-5"
            />
          </div>
        </div>

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
