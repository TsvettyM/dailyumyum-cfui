import IconFacebook from "@/features/icons/components/IconFacebook";
import IconInstagram from "@/features/icons/components/IconInstagram";
import IconLogoFooter from "@/features/icons/components/IconLogoFooter";
import IconTwitter from "@/features/icons/components/IconTwitter";
import IconYoutube from "@/features/icons/components/IconYoutube";
import Link from "next/link";
import CommonInput from "./CommonInput";
import CommonTextArea from "./CommonTextArea";

const CommonFooter = () => {
  function onSubmit(formValues: any) {
    console.log(formValues);
  }

  return (
    <footer className="flex bg-green pb-5 pt-8 mt-auto">
      <div className="container">
        <div className="top__side flex flex-col md:flex-row md:justify-between">
          <div className="apps flex flex-col justify-center items-center md:items-start">
            <IconLogoFooter />

            <div className="social__apps flex gap-3 mt-5">
              <Link href="/">
                <IconYoutube />
              </Link>

              <Link href="/">
                <IconInstagram />
              </Link>

              <Link href="/">
                <IconFacebook />
              </Link>

              <Link href="/">
                <IconTwitter />
              </Link>
            </div>

            <p className="text-16 text-white font-medium mt-5 mb-auto">
              dailyumyum@gmail.com
            </p>
          </div>

          <div className="explore--links flex flex-col w-full md:max-w-max">
            <p className="text-20 text-white text-center md:text-start font-bold mb-3 md:mb-6 mt-4 md:mt-0">
              Explore
            </p>

            <div className="links flex flex-wrap md:flex-col justify-center md:justify-start items-center md:items-start gap-4 text-16 text-white font-medium">
              <Link href="/">Home</Link>
              <Link href="/recipes">Recipes</Link>
              <Link href="/">About Us</Link>
              <Link href="/"> Term & Conditions</Link>
              <Link href="/"> Privacy Policy</Link>
            </div>
          </div>

          <div className="contact w-full md:max-w-[300px] lg:max-w-[450px]">
            <h2 className="text-20 text-white text-center md:text-start font-bold mt-8 md:mt-0">
              Contact Us
            </h2>

            <form className="flex flex-col" onSubmit={onSubmit}>
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 my-2">
                <CommonInput
                  placeholder="Enter your name..."
                  styleMode="white"
                  type="text"
                  label="Name"
                />

                <CommonInput
                  placeholder="Enter your email..."
                  styleMode="white"
                  type="text"
                  label="Email"
                />
              </div>

              <CommonTextArea
                className="h-[98px]"
                placeholder="Enter your message..."
                styleMode="white"
                label="Message"
                error=""
              />

              <button
                type="submit"
                className="text-16 text-white text-center font-bold h-9 w-full sm:w-[156px] mt-5 ml-0 sm:ml-auto rounded-full border "
              >
                Send Email
              </button>
            </form>
          </div>
        </div>

        <div className="bottom__side flex justify-center md:justify-start items-center md:items-start mt-10 md:mt-0 mb-auto">
          <p className="text-[12px] text-white/50">© 2024 Dailyumyum</p>
        </div>
      </div>
    </footer>
  );
};

export default CommonFooter;
