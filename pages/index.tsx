import HomepageAbout from "@/features/homepage/components/HomepageAbout";
import HomepageView from "@/features/homepage/components/HomepageView";
import Head from "next/head";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <HomepageView />
      <HomepageAbout />
    </>
  );
};

export default Homepage;
