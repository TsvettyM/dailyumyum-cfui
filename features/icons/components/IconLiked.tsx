import IIcon from "../interfaces/icon.interface";

const IconLiked = ({ className }: IIcon) => {
  return (
    <svg
      className={className}
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.0804 0C15.7757 0 13.7578 1.01774 12.5 2.73804C11.2422 1.01774 9.22433 0 6.91964 0C5.08507 0.00212343 3.32624 0.751455 2.029 2.0836C0.731764 3.41574 0.00206779 5.22191 0 7.10584C0 15.1286 11.5837 21.6224 12.077 21.8906C12.207 21.9624 12.3524 22 12.5 22C12.6476 22 12.793 21.9624 12.923 21.8906C13.4163 21.6224 25 15.1286 25 7.10584C24.9979 5.22191 24.2682 3.41574 22.971 2.0836C21.6738 0.751455 19.9149 0.00212343 18.0804 0ZM12.5 20.0339C10.4621 18.8144 1.78571 13.2593 1.78571 7.10584C1.78749 5.70816 2.32895 4.36824 3.29136 3.37993C4.25378 2.39162 5.55858 1.83559 6.91964 1.83377C9.0904 1.83377 10.9129 3.02113 11.6741 4.92825C11.7414 5.09641 11.8558 5.24025 12.0029 5.34147C12.1499 5.4427 12.323 5.49674 12.5 5.49674C12.677 5.49674 12.8501 5.4427 12.9971 5.34147C13.1442 5.24025 13.2586 5.09641 13.3259 4.92825C14.0871 3.01769 15.9096 1.83377 18.0804 1.83377C19.4414 1.83559 20.7462 2.39162 21.7086 3.37993C22.6711 4.36824 23.2125 5.70816 23.2143 7.10584C23.2143 13.2501 14.5357 18.8133 12.5 20.0339Z"
        fill="#AFACAC"
      />
    </svg>
  );
};

export default IconLiked;
