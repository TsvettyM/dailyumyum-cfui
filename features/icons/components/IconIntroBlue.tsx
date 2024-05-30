import IIcon from "../interfaces/icon.interface";

const IconIntroBlue = ({ className }: IIcon) => {
  return (
    <svg
      className={className}
      width="478"
      height="808"
      viewBox="0 0 478 808"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_148_4)">
        <circle cx="-50" cy="280" r="225" fill="#CAE9FF" />
      </g>
      <defs>
        <filter
          id="filter0_f_148_4"
          x="-577.9"
          y="-247.9"
          width="1055.8"
          height="1055.8"
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
            result="effect1_foregroundBlur_148_4"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default IconIntroBlue;
