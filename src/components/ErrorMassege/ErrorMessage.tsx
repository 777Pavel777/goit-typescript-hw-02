import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <div className={css.errorMessage}>
      <p>Oops, something went wrong. Please try later</p>
    </div>
  );
};

export default ErrorMessage;
