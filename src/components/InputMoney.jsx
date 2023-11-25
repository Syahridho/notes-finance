import { useState } from "react";

const InputMoney = ({ title, action, cancel, income }) => {
  const [input, setInput] = useState({
    title: "",
    balance: 0,
    income: income,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    console.log(input);
  };

  const color = income ? "blue" : "red";
  return (
    <div className="absolute flex flex-col bg-transparent w-[96vw]  h-screen top-0 left-0">
      <div className="w-96 flex flex-col gap-4 bg-white px-4 py-8 mx-auto my-auto  border rounded shadow-lg">
        <h1 className="text-center font-semibold text-xl">{title}</h1>
        <div className="flex flex-col">
          <label htmlFor="title">Nama </label>
          <input
            type="text"
            name="title"
            className="border p-1"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="balance">Harga</label>
          <input
            type="number"
            name="balance"
            className="border p-1"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <button
            className={`py-2 bg-${color}-500 text-white rounded shadow border border-${color}-500 transition duration-500 hover:bg-${color}-700`}
            onClick={() => action(input)}
          >
            {title}
          </button>
          <button
            className={`py-2 bg-white text-${color}-500 rounded shadow border border-${color}-500 transition duration-500 hover:bg-${color}-500 hover:text-white`}
            onClick={cancel}
          >
            Batalkan
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputMoney;
