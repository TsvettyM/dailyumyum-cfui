import IIcon from "../interfaces/icon.interface";

const IconSort = ({ className }: IIcon) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14 14H2m8-4H2m4-4H2m16 12H2m17-4V4m0 0l3 3m-3-3l-3 3"
      />
    </svg>
  );
};

export default IconSort;
