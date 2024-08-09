interface IProps {
  error: string;
}

const CommonError = ({ error }: IProps) => {
  return (
    <button
      type="button"
      className="common__error absolute -bottom-6 left-0 text-14 text-left text-red"
    >
      {error}
    </button>
  );
};

export default CommonError;
