import IconBack from "@/features/icons/components/IconBack";
import IconNext from "@/features/icons/components/IconNext";
import { ReactNode, useRef } from "react";

interface IProps {
  children: ReactNode;
}

const CommonCarousel = ({ children }: IProps) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  function handleButtonNext(scrollOfset: number) {
    if (!carouselRef.current) {
      return;
    }

    console.log(carouselRef.current.scrollLeft);
    carouselRef.current.scrollLeft += scrollOfset;
  }

  function handleButtonBack(scrollOfset: number) {
    if (!carouselRef.current) {
      return;
    }

    console.log(carouselRef.current.scrollLeft);

    carouselRef.current.scrollLeft -= scrollOfset;
  }

  return (
    <div className="common__carousel flex">
      <div className="carousel__buttons">
        <button
          className="carousel__button--back"
          type="button"
          onClick={() => handleButtonBack(306)}
        >
          <IconBack />
        </button>

        <button
          className="carousel__button--next"
          type="button"
          onClick={() => handleButtonNext(306)}
        >
          <IconNext />
        </button>
      </div>

      <div className="carousel__content" ref={carouselRef}>
        {children}
      </div>
    </div>
  );
};

export default CommonCarousel;
