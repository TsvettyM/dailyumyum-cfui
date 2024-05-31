import IconArrow from "@/features/icons/components/IconArrow";
import IconCarouselArrow from "@/features/icons/components/IconCarouselArrow";
import classNames from "classnames";

interface IProps {
  handleSlideChange: () => void;
  disabled: boolean;
  text?: string;
  iconDirection?: "left" | "right";
}

const CommonCarouselButton = (props: IProps) => {
  const { disabled, text, handleSlideChange, iconDirection } = props;

  return (
    <button
      type="button"
      onClick={handleSlideChange}
      className="group disabled:text-black/50 flex-shrink-0"
      disabled={disabled}
    >
      {text ? (
        text
      ) : (
        <IconCarouselArrow
          className={classNames(
            "size-12 duration-200 group-disabled:opacity-40",
            {
              "rotate-180": iconDirection === "right",
            }
          )}
        />
      )}
    </button>
  );
};

export default CommonCarouselButton;
