import { useState } from "react";

const InputMoney = ({ income, addMoney }) => {
  const [money, setMoney] = useState({
    title: "",
    totalMoney: "",
    inCome: income,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMoney({
      ...money,
      [name]: value,
    });
    console.log(money);
  };

  const onHandleAdd = () => {
    addMoney(money);
  };

  return (
    <div className="w-96  mx-auto">
      <div className="flex flex-col mt-12">
        <label htmlFor="title" className="mt-2">
          Judul
        </label>
        <input
          id="title"
          name="title"
          className="border-2 border-blue-100 rounded p-1 text-base"
          type="text"
          placeholder="Bensin"
          value={money.title}
          onChange={handleInputChange}
        />
        <label htmlFor="otalMoney" className="mt-2">
          Jumlah
        </label>
        <input
          id="totalMoney"
          name="totalMoney"
          className="border-2 border-blue-100 rounded p-1 text-base"
          type="number"
          placeholder="Total Pengeluaran"
          value={money.totalMoney}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-700 text-white py-2 my-6 rounded hover:bg-blue-600"
          type="submit"
          onClick={onHandleAdd}
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

export default InputMoney;
