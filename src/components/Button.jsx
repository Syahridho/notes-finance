const Button = ({ title, income, action }) => {
  const incomes = income ? "blue" : "red";
  return (
    <button
      className={`bg-${incomes}-500 py-1 px-8 text-white rounded shadow`}
      onClick={action}
    >
      {title}
    </button>
  );
};

export default Button;
