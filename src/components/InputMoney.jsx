import { useState } from "react";

const InputMoney = ({ income }) => {
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

  return (
    <div className="m-6">
      <form action="" className="flex flex-col mx-8">
        <label htmlFor="title" className="my-2">
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
        <label htmlFor="otalMoney" className="my-2">
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
        >
          Kirim
        </button>
      </form>
    </div>
  );
};

export default InputMoney;
