import IIcon from "../interfaces/icon.interface";

const IconIntroYellow = ({ className }: IIcon) => {
  return (
    <svg
      className={className}
      width="397"
      height="889"
      viewBox="0 0 397 889"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_148_5)">
        <circle cx="444.5" cy="444.5" r="141.5" fill="#F6FFBC" />
      </g>
      <defs>
        <filter
          id="filter0_f_148_5"
          x="0.100006"
          y="0.100006"
          width="888.8"
          height="888.8"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="151.45"
            result="effect1_foregroundBlur_148_5"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default IconIntroYellow;
