import { useEffect, useState } from "react";
import { InitialData } from "../Utils";

import Button from "../components/Button";
import CardStatus from "../components/CardStatus";
import Header from "../components/Header";
import InputMoney from "../components/InputMoney";
import ListItems from "../components/ListItems";

const Home = () => {
  const [moneys, setMoneys] = useState(InitialData());
  const [inputPlus, setInputPlus] = useState(false);
  const [inputMinus, setInputMinus] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalPlus, setTotalPlus] = useState(0);
  const [totalMinus, setTotalMinus] = useState(0);

  const getTotalPlus = (data) => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].income === true) {
        total += data[i].balance;
      }
    }
    return total;
  };

  const getTotalMinus = (data) => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].income === false) {
        total += data[i].balance;
      }
    }
    return total;
  };

  const formatCurrency = (number) => {
    return new Number(number).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  const onAddMoney = ({ title, balance, income }) => {
    setMoneys((prevMoneys) => [
      ...prevMoneys,
      {
        id: +new Date(),
        title: title,
        date: new Date().toISOString(),
        balance: parseInt(balance),
        income: income,
      },
    ]);
    console.log(moneys);
    setInputPlus(false);
    setInputMinus(false);
  };

  const onHandleDelete = (id) => {
    console.log(id);
    const moneyFilter = moneys.filter((money) => money.id !== id);
    setMoneys(moneyFilter);
  };

  useEffect(() => {
    const total = formatCurrency(getTotalPlus(moneys) - getTotalMinus(moneys));
    const totalPlus = formatCurrency(getTotalPlus(moneys));
    const totalMinus = formatCurrency(getTotalMinus(moneys));
    setTotal(total);
    setTotalPlus(totalPlus);
    setTotalMinus(totalMinus);
  });
  return (
    <div className="relative">
      <Header saldo={total} />
      <div className="flex gap-4 justify-center my-8">
        <CardStatus title={"Pemasukkan"} money={totalPlus} income={true} />
        <CardStatus title={"Pengeluaran"} money={totalMinus} income={false} />
      </div>
      <div>
        <h1 className="text-center font-semibold text-md my-4">
          Ringkasan Transaksi
        </h1>
        <div className="flex gap-4 justify-center">
          <Button
            title={"Tambah"}
            income={true}
            action={() => setInputPlus(true)}
          />
          <Button
            title={"Kurangi"}
            income={false}
            action={() => setInputMinus(true)}
          />
        </div>
      </div>
      <div className="flex flex-col items-center my-8 gap-3">
        {moneys.length === 0 ? (
          <p>Data Kosong</p>
        ) : (
          <ListItems
            moneys={moneys}
            onDelete={onHandleDelete}
            format={formatCurrency}
          />
        )}
      </div>
      {inputPlus ? (
        <InputMoney
          title={"Tambah"}
          income={true}
          action={onAddMoney}
          cancel={() => setInputPlus(false)}
        />
      ) : null}
      {inputMinus ? (
        <InputMoney
          title={"Kurangi"}
          income={false}
          action={onAddMoney}
          cancel={() => setInputMinus(false)}
        />
      ) : null}
    </div>
  );
};

export default Home;
