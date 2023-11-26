import { useState } from "react";

const InputMoney = ({ title, action, cancel, income, format }) => {
  const [input, setInput] = useState({
    title: "",
    balance: 0,
    income: income,
  });

  const handleInputChangeTitle = (e) => {
    setInput({
      ...input,
      title: e.target.value,
    });
    console.log(input);
  };

  const handleInputChangePrice = (e) => {
    setInput({
      ...input,
      balance: e.target.value,
    });
    console.log(input);
  };

  const handleOnSubmit = () => {
    action(input);
  };

  const plus =
    "py-2 bg-blue-500 text-white rounded shadow border border-blue-500 transition duration-500 hover:bg-blue-700";
  const minus =
    "py-2 bg-red-500 text-white rounded shadow border border-red-500 transition duration-500 hover:bg-red-700";
  const plusCancel =
    "py-2 bg-white text-blue-500 rounded shadow border border-blue-500 transition duration-500 hover:bg-blue-500 hover:text-white";
  const minusCancel =
    "py-2 bg-white text-red-500 rounded shadow border border-red-500 transition duration-500 hover:bg-red-500 hover:text-white";

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
            value={input.title}
            onChange={handleInputChangeTitle}
            placeholder="nama"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="balance">Harga</label>
          <input
            type="text"
            name="balance"
            className="border p-1"
            value={input.balance}
            onChange={handleInputChangePrice}
            placeholder="0"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button className={income ? plus : minus} onClick={handleOnSubmit}>
            {title}
          </button>
          <button
            className={income ? plusCancel : minusCancel}
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
