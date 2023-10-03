import { data } from "autoprefixer";
import CardItem from "./CardItem";
import { BiWallet } from "react-icons/bi";
import { PiMoney } from "react-icons/pi";

const CardList = ({ datas }) => {
  return (
    <>
      {datas.map((data) =>
        data.income ? (
          <CardItem
            key={data.id}
            id={data.id}
            title={data.title}
            balance={data.balance}
            date={data.date}
            style={"purple"}
            icons={BiWallet}
          />
        ) : (
          <CardItem
            key={data.id}
            id={data.id}
            title={data.title}
            balance={data.balance}
            date={data.date}
            style={"pink"}
            icons={PiMoney}
          />
        )
      )}
    </>
  );
};

export default CardList;
