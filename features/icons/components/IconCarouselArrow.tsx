import IIcon from "../interfaces/icon.interface";

const IconCarouselArrow = ({ className }: IIcon) => {
  return (
    <svg
      className={className}
      viewBox="0 0 58 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M57 29.5C57 45.2563 44.4479 58 29 58C13.5521 58 1 45.2563 1 29.5C1 13.7437 13.5521 1 29 1C44.4479 1 57 13.7437 57 29.5Z"
        fill="white"
        stroke="#AFACAC"
        strokeWidth="2"
      />
      <path
        d="M35 38.463L35 22.5392C35 21.3249 33.7137 20.5872 32.7231 21.2481L20.6879 29.21C20.4772 29.3486 20.3036 29.5404 20.1833 29.7674C20.0631 29.9945 20 30.2495 20 30.5088C20 30.768 20.0631 31.023 20.1833 31.2501C20.3036 31.4772 20.4772 31.6689 20.6879 31.8076L32.7231 39.7541C32.9461 39.904 33.2039 39.9886 33.4693 39.9989C33.7347 40.0092 33.9979 39.9449 34.231 39.8127C34.4642 39.6805 34.6587 39.4853 34.794 39.2477C34.9294 39.0102 35.0005 38.7391 35 38.463Z"
        fill="black"
      />
    </svg>
  );
};

export default IconCarouselArrow;
