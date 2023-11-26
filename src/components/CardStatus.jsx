import { FaMoneyBill } from "react-icons/fa";

const CardStatus = ({ title, money, income }) => {
  const plus = "bg-blue-200 p-1 inline-block rounded-sm text-blue-600";
  const minus = "bg-red-200 p-1 inline-block rounded-sm text-red-600";
  return (
    <div className="w-52 h-32 bg-slate-50 p-4 border border-slate-200 shadow">
      <div className="flex items-center gap-2">
        <div className={income ? plus : minus}>
          <FaMoneyBill />
        </div>
        <h1 className="inline">{title}</h1>
      </div>
      <p className="text-sm my-2">{money}</p>
    </div>
  );
};

export default CardStatus;
