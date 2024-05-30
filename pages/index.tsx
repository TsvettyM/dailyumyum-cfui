import HomepagePopularRecipes from "@/features/homepage/components/HomepagePopularRecipes";
import HomepageView from "@/features/homepage/components/HomepageView";
import Head from "next/head";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <HomepageView />
      <HomepagePopularRecipes />
    </>
  );
};

export default Homepage;
