import classNames from "classnames";
import { ReactNode, TouchEvent, useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const CommonCarouselDots = dynamic(() => import("./CommonCarouselDots"), {
  ssr: false,
});
const CommonCarouselButton = dynamic(() => import("./CommonCarouselButton"), {
  ssr: false,
});

interface IProps {
  itemsToShow: number;
  children: ReactNode[];
  /** The interval for auto-looping in milliseconds (ex. 2000) */
  autoLoopInterval?: number;
  /** Make the carousel buttons clickable after limit */
  isInfinite?: boolean;
  hasButtons?: boolean;
  hasDots?: boolean;
}

const CommonCarousel = (props: IProps) => {
  const {
    children,
    autoLoopInterval,
    isInfinite,
    itemsToShow,
    hasButtons,
    hasDots,
  } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const slides = Math.ceil(children.length / itemsToShow);

  const handleNextSlide = useCallback(() => {
    if (isInfinite && currentSlide === slides - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides);
    }
  }, [currentSlide, isInfinite, slides]);

  const handlePrevSlide = useCallback(() => {
    if (isInfinite && currentSlide === 0) {
      setCurrentSlide(slides - 1);
    } else {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides) % slides);
    }
  }, [currentSlide, isInfinite, slides]);

  useEffect(() => {
    if (!autoLoopInterval) {
      return;
    }
    let intervalId: NodeJS.Timeout | null = null;

    if (autoLoopInterval) {
      intervalId = setInterval(() => {
        handleNextSlide();
      }, autoLoopInterval);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoLoopInterval, handleNextSlide]);

  function getSlideData(index: number) {
    const startIndex = index * itemsToShow;
    return children.slice(startIndex, startIndex + itemsToShow);
  }

  function handleDotButton(slide: number) {
    setCurrentSlide(slide);
  }

  function handleTouchStart(e: TouchEvent<HTMLDivElement>) {
    setTouchStartX(e.touches[0].clientX);
  }

  function handleTouchEnd(e: TouchEvent<HTMLDivElement>) {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    const threshold = 20;

    if (deltaX > threshold) {
      handlePrevSlide();
    } else if (deltaX < -threshold) {
      handleNextSlide();
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    e.preventDefault();
  };

  const handleMouseUp = (e: MouseEvent) => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    handleSwipe(e.clientX);
  };

  const handleSwipe = (endX: number) => {
    const deltaX = endX - touchStartX;
    const threshold = 20;

    if (deltaX > threshold) {
      handlePrevSlide();
    } else if (deltaX < -threshold) {
      handleNextSlide();
    }
  };

  return (
    <div className="common__carousel flex  items-center">
      {hasButtons && (
        <CommonCarouselButton
          handleSlideChange={handlePrevSlide}
          disabled={!isInfinite ? currentSlide === 0 : false}
          iconDirection="left"
        />
      )}

      <div className="carousel__content relative w-full space-y-5">
        <div className="flex items-center h-full overflow-hidden">
          {Array.from({ length: slides }).map((_, index) => (
            <div
              key={index}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className={classNames(
                "grid h-full w-full p-4 select-none gap-10 duration-200 max-w-[1000px]",
                {
                  "translate-x-0": index === currentSlide,
                  "pointer-events-none absolute opacity-0 -translate-x-5":
                    index !== currentSlide,
                }
              )}
              style={{ gridTemplateColumns: `repeat(${itemsToShow}, 1fr)` }}
            >
              {getSlideData(index).map((item, itemIndex) => (
                <div key={itemIndex}>{item}</div>
              ))}
            </div>
          ))}
        </div>

        {hasDots && (
          <CommonCarouselDots
            handleDotButton={handleDotButton}
            slides={slides}
            currentSlide={currentSlide}
          />
        )}
      </div>

      {hasButtons && (
        <CommonCarouselButton
          handleSlideChange={handleNextSlide}
          disabled={!isInfinite ? currentSlide === slides - 1 : false}
          iconDirection="right"
        />
      )}
    </div>
  );
};

export default CommonCarousel;
