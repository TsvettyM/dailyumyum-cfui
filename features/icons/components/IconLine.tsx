import IIcon from "../interfaces/icon.interface";

const IconLine = ({ className }: IIcon) => {
  return (
    <svg
      className={className}
      width="74"
      height="68"
      viewBox="0 0 74 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.8182 2H12C6.47716 2 2 6.47715 2 12V66"
        stroke="#356959"
        stroke-width="4"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default IconLine;
