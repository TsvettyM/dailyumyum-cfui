import HomepageAbout from "./HomepageAbout";
import HomepageIntro from "./HomepageIntro";
import HomepagePopularRecipes from "./HomepagePopularRecipes";

const HomepageView = () => {
  return (
    <div>
      <HomepageIntro />
      {/* <HomepagePopularRecipes /> */}
      <HomepageAbout />
    </div>
  );
};

export default HomepageView;
