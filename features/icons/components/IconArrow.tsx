import IIcon from "../interfaces/icon.interface";

const IconArrow = ({ className }: IIcon) => {
  return (
    <svg
      className={className}
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L6.51778 5.24444C7.02296 5.63305 7.04056 6.38876 6.55401 6.80045L1 11.5"
        stroke="#AFACAC"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default IconArrow;
