import IIcon from "../interfaces/icon.interface";

const IconMobileMenu = ({ className }: IIcon) => {
  return (
    <svg
      className={className}
      width="25"
      height="17"
      viewBox="0 0 25 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="14" width="25" height="3" rx="1.5" fill="#356959" />
      <rect y="7" width="25" height="3" rx="1.5" fill="#356959" />
      <rect width="25" height="3" rx="1.5" fill="#356959" />
    </svg>
  );
};

export default IconMobileMenu;
