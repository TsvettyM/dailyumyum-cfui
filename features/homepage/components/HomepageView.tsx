import HomepageAbout from "./HomepageAbout";
import HomepageIntro from "./HomepageIntro";
import HomepagePopularRecipes from "./HomepagePopularRecipes";

const HomepageView = () => {
  return (
    <>
      <HomepageIntro />
      <HomepagePopularRecipes />
      <HomepageAbout />
    </>
  );
};

export default HomepageView;
