import classNames from "classnames";

interface IProps {
  slides: number;
  currentSlide: number;
  handleDotButton: (index: number) => void;
}

const CommonCarouselDots = (props: IProps) => {
  const { currentSlide, handleDotButton, slides } = props;

  return (
    <div className="common__carousel--dots flex items-center justify-center space-x-2">
      {Array.from(Array(slides)).map((_, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => handleDotButton(index)}
            className={classNames("size-2.5 rounded-full duration-200", {
              "bg-black": currentSlide === index,
              "bg-black/20": currentSlide !== index,
            })}
          />
        );
      })}
    </div>
  );
};

export default CommonCarouselDots;
