import React, { Component } from "react";
import { InitialData } from "./Utils";

// Components
import CardStatus from "./components/CardStatus";
import ActionButton from "./components/ActionButton";
import CardList from "./components/CardList";
import Header from "./components/Header";

// Icons React
import { BiWallet } from "react-icons/bi";
import { PiMoney } from "react-icons/pi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: InitialData,
    };
  }

  getTotalBalanceIncome(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].income === true) {
        total += data[i].balance;
      }
    }
    return total;
  }

  getTotalBalanceNotIncome(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].income === false) {
        total += data[i].balance;
      }
    }
    return total;
  }

  transactionPlus(data) {
    const income = data.filter((item) => item.income === true);
    return income.length;
  }

  transactionMinus(data) {
    const income = data.filter((item) => item.income === false);
    return income.length;
  }

  formatCurrency(number) {
    return new Number(number).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }
  render() {
    const totalIncome = this.getTotalBalanceIncome(this.state.datas);
    const totalNotIncome = this.getTotalBalanceNotIncome(this.state.datas);
    const sisaSaldo = totalIncome - totalNotIncome;
    const totalPlus = this.transactionPlus(this.state.datas);
    const totalMinus = this.transactionMinus(this.state.datas);
    return (
      <>
        <Header balance={this.formatCurrency(sisaSaldo)} />
        <div className="flex justify-center gap-3 my-5">
          <CardStatus
            icons={BiWallet}
            title={"Pemasukan"}
            money={this.formatCurrency(totalIncome)}
            transaction={totalPlus}
          />
          <CardStatus
            icons={PiMoney}
            title={"Pengeluaran"}
            money={this.formatCurrency(totalNotIncome)}
            transaction={totalMinus}
          />
        </div>
        <div>
          <h1 className="font-semibold  ms-8 mb-4 text-purple-500">
            Ringkasan Transaksi
          </h1>
          <div className="flex justify-center gap-4">
            <ActionButton
              title={"Pemasukan"}
              icons={AiOutlinePlusCircle}
              style={"bg-purple-500"}
            />
            <ActionButton
              title={"Pengeluaran"}
              icons={AiOutlineMinusCircle}
              style={"bg-pink-500"}
            />
          </div>
        </div>
        <div className="w-10/12 mx-auto my-6 flex flex-col gap-2">
          <CardList datas={this.state.datas} />
        </div>
      </>
    );
  }
}

export default App;
