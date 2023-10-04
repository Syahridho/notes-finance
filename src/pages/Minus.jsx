import HeaderAction from "../components/HeaderAction";
import InputMoney from "../components/inputMoney";

const Minus = () => {
  return (
    <div className="container mx-auto">
      <HeaderAction title={"PENGELUARAN"} />
      <InputMoney income={false} />
    </div>
  );
};

export default Minus;
