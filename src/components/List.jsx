import { showFormattedDate } from "./../Utils/index";
import { FaMoneyBill, FaRegTrashAlt } from "react-icons/fa";
const List = ({ id, title, date, balance, income, onDelete, format }) => {
  const color = income ? "blue" : "red";

  return (
    <div className="py-1 px-2 border w-96 flex justify-between rounded" id={id}>
      <div className="flex items-center gap-2">
        <div className={`p-2 bg-${color}-400 text-${color}-600 rounded`}>
          <FaMoneyBill />
        </div>
        <div>
          <h1>{title}</h1>
          <p className="text-xs">{showFormattedDate(date)}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <h2>{format(balance)}</h2>
        <button
          className="p-2 bg-red-500 text-white rounded transition duration-500 hover:bg-red-700"
          onClick={() => onDelete(id)}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default List;
