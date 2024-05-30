const HomepagePopularRecipesCarouselButtons = ({
  selectedIndex,
  totalItems,
}) => {
  return (
    <div className="carousel--btn flex justify-center items-center gap-3">
      {Array.from({ length: totalItems }).map((_, index) => (
        <span
          key={index}
          className={`h-3 w-3 rounded-full ${
            index === selectedIndex
              ? "bg-green border border-purple"
              : "bg-grayy"
          }`}
        />
      ))}
    </div>
  );
};

export default HomepagePopularRecipesCarouselButtons;
