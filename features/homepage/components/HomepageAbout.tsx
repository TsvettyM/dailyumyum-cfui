import CommonButton from "@/features/common/components/CommonButton";
import IconBGAbout from "@/features/icons/components/IconBGAbout";
import Image from "next/image";

const HomepageAbout = () => {
  return (
    <section className="homepage__section--about flex overflow-hidden py-10 md:py-20 px-0 md:px-20">
      <div className="container flex flex-col-reverse md:flex-row justify-center items-center relative">
        <div className="left flex flex-col justify-center items-center relative mr-0 md:mr-10 xl:mr-auto mt-20 md:mt-0">
          <IconBGAbout className="absolute w-[520px] h-[440px] md:h-[480px] md:w-[570px] lg:h-[500px] lg:w-[580px] -left-[155px] md:-left-[165px] lg:-left-[150px] -top-[60px] md:-top-[60px] lg:-top-14" />

          <div className="flex flex-col justify-center items-center relative">
            <p className="text-28 text-green text-center font-bold mb-5">
              Chipi Chipi
            </p>

            <div className="relative h-[150px] md:h-[180px] lg:h-[200px] w-[180px] md:w-[210px] lg:w-[240px] mb-11">
              <Image
                src="/images/about-img.png"
                alt=""
                fill
                draggable={false}
              />
            </div>

            <CommonButton
              type="button"
              href="/recipe/ChipiChipi"
              style="border"
              title="Get this recipe"
              className="w-[160px] md:w-[180px] lg:w-[193px]"
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
