import { useState } from "react";
import { InitialData } from "./../Utils";

// Components
import CardStatus from "./../components/CardStatus";
import ActionButton from "./../components/ActionButton";
import CardList from "./../components/CardList";
import Header from "./../components/Header";

// Icons React
import { BiWallet } from "react-icons/bi";
import { PiMoney } from "react-icons/pi";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Home = () => {
  const [datas, setDatas] = useState(InitialData);

  const getTotalBalanceIncome = (data) => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].income === true) {
        total += data[i].balance;
      }
    }
    return total;
  };

  const getTotalBalanceNotIncome = (data) => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].income === false) {
        total += data[i].balance;
      }
    }
    return total;
  };

  const transactionPlus = (data) => {
    const income = data.filter((item) => item.income === true);
    return income.length;
  };

  const transactionMinus = (data) => {
    const income = data.filter((item) => item.income === false);
    return income.length;
  };

  const formatCurrency = (number) => {
    return new Number(number).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };
  const totalIncome = getTotalBalanceIncome(datas);
  const totalNotIncome = getTotalBalanceNotIncome(datas);
  const sisaSaldo = totalIncome - totalNotIncome;
  const totalPlus = transactionPlus(datas);
  const totalMinus = transactionMinus(datas);
  console.log(datas);
  return (
    <div>
      <Header balance={formatCurrency(sisaSaldo)} />
      <div className="flex justify-center gap-3 my-5">
        <CardStatus
          icons={BiWallet}
          title={"Pemasukan"}
          money={formatCurrency(totalIncome)}
          transaction={totalPlus}
        />
        <CardStatus
          icons={PiMoney}
          title={"Pengeluaran"}
          money={formatCurrency(totalNotIncome)}
          transaction={totalMinus}
        />
      </div>
      <div className="">
        <h1 className="font-semibold text-center mt-12 mb-6 me-36 text-purple-500">
          Ringkasan Transaksi
        </h1>
        <div className="flex justify-center gap-8">
          <ActionButton
            title={"Pemasukan"}
            icons={AiOutlinePlusCircle}
            style={"bg-purple-500"}
            objective={"/plus"}
          />
          <ActionButton
            title={"Pengeluaran"}
            icons={AiOutlineMinusCircle}
            style={"bg-pink-500"}
            objective={"/minus"}
          />
        </div>
      </div>
      <div className="mx-auto my-8 w-80 flex flex-col gap-3">
        <CardList datas={datas} />
      </div>
    </div>
  );
};

export default Home;
