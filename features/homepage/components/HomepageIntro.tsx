import CommonButton from "@/features/common/components/CommonButton";
import IconBGIntro from "@/features/icons/components/IconBGIntro";
import Image from "next/image";

const HomepageIntro = () => {
  return (
    <section className="homepage__section--intro overflow-hidden py-3 md:py-20">
      <div className="container relative flex flex-col items-center justify-center md:flex-row">
        <div className="left__side flex flex-col justify-center md:justify-start items-center md:items-start md:mr-auto">
          <h1 className="text-36 md:text-48 font-bold text-black lg:text-64">
            <span className="flex items-end justify-center md:justify-start">
              Daily recipes
              <span className="relative bottom-6 ml-1 block h-2.5 w-2.5 rounded-2 bg-green" />
            </span>
            <span className="flex items-end justify-center md:justify-start">
              Daily yum
              <span className="relative bottom-6 ml-1 block h-2.5 w-2.5 rounded-2 bg-green" />
            </span>
          </h1>
          <p className="mb-10 mt-5 text-center text-16 font-medium text-black md:max-w-[330px] md:text-start md:text-20 lg:max-w-[480px]">
            Discover a variety of culinary delights to impress with your loved
            ones and yourself.
          </p>

          <CommonButton
            type="button"
            href="/recipe"
            style="green"
            title="Explore our recipes"
            className="flex justify-center items-center h-8 w-full md:w-[203px]"
          />
        </div>

        <div className="right__side relative mt-4 mr-0 lg:mr-20 flex flex-col items-center justify-center md:mt-0">
          <IconBGIntro className="absolute -right-28 sm:-right-20 top-3 w-[420px] md:w-[450px] lg:w-[488px]" />

          <p className="text-center text-28 font-bold text-green mb-0 mt-14">
            Tteokkbeokki
          </p>

          <div className="relative mb-auto left-0 xs:left-1.5 s:left-2 sm:-left-2.5 h-[180px] md:h-[200px] lg:h-[236px] w-[190px] md:w-[240px] lg:w-[298px]">
            <Image src="/images/intro-img.png" alt="" fill draggable={false} />
          </div>

          <CommonButton
            type="button"
            href="/recipe/Tteokkbeokki"
            style="border"
            title="Get this recipe"
            className="mt-5 w-[155px] sm:w-[160px] md:w-[193px] lg:mt-4.5 bg-white relative -bottom-1 lg:-bottom-0 -right-1 sm:right-7 md:right-4 lg:right-1.5"
          />
        </div>
      </div>
    </section>
  );
};

export default HomepageIntro;
