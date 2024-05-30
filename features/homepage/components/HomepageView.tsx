import CommonButton from "@/features/common/components/CommonButton";
import IconIntro from "@/features/icons/components/IconIntro";
import Image from "next/image";

const HomepageView = () => {
  return (
    <section className="homepage__view overflow-hidden py-3 md:py-20">
      <div className="container relative flex flex-col items-center justify-center md:flex-row">
        <div className="left__side flex flex-col justify-center md:justify-start items-center md:items-start md:mr-auto">
          <h1 className="text-48 font-bold text-black lg:text-64">
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
            href="/"
            style="green"
            title="Explore our recipes"
            className="flex justify-center items-center h-8 w-full md:w-[203px]"
          />
        </div>

        <div className="right__side relative mt-4 mr-0 lg:mr-20 flex flex-col items-center justify-center md:mt-0">
          <IconIntro className="absolute -right-16.5 sm:-right-20 top-2 w-[400px] md:w-[450px] lg:w-[488px]" />

          <p className="text-center text-28 font-bold text-green mb-0 mt-14">
            Tteokkbeokki
          </p>

          <div className="relative mb-auto left-0 xs:left-1.5 s:left-2 sm:-left-2.5 h-[180px] md:h-[200px] lg:h-[236px] w-[190px] md:w-[240px] lg:w-[298px]">
            <Image src="/images/intro-img.png" alt="" fill draggable={false} />
          </div>

          <CommonButton
            type="button"
            href="/"
            style="border"
            title="Get this recipe"
            className="relative -bottom-0 left-2 s:left-2 sm:-left-4 mt-2 md:mt-5 w-[140px] s:w-[145px] sm:w-[160px] md:-left-[14px] md:w-[193px] lg:bottom-1 lg:-left-1 lg:mt-4.5"
          />
        </div>
      </div>
    </section>
  );
};

export default HomepageView;
