import IIcon from "../interfaces/icon.interface";

const IconLogOut = ({ className }: IIcon) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="#748D93"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80l-80-80m-192 80h256"
      />
    </svg>
  );
};

export default IconLogOut;
