import { useState } from "react";
import { InitialData } from "../Utils";
import HeaderAction from "../components/HeaderAction";
import InputMoney from "../components/inputMoney";

const Plus = () => {
  const [datas, setDatas] = useState(InitialData);

  const onAddMoneyHandler = ({ title, balance }) => {
    setDatas((prevState) => {
      return {
        datas: [
          ...prevState.datas,
          {
            id: "12",
            title: "title",
            date: "21 agustus 2021",
            balance: 20000,
            income: true,
          },
        ],
      };
    });
    console.log(datas);
  };
  return (
    <div>
      <HeaderAction title="PEMASUKAN" />
      <InputMoney income={true} addMoney={onAddMoneyHandler} />
    </div>
  );
};

export default Plus;
