const Button = ({ title, income, action }) => {
  const plus = "bg-blue-500 py-1 px-8 text-white rounded shadow";
  const minus = "bg-red-500 py-1 px-8 text-white rounded shadow";
  return (
    <button className={income ? plus : minus} onClick={action}>
      {title}
    </button>
  );
};

export default Button;
