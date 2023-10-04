import HeaderAction from "../components/HeaderAction";
import InputMoney from "../components/inputMoney";

const Plus = () => {
  return (
    <div>
      <HeaderAction title="PEMASUKAN" />
      <InputMoney income={true} />
    </div>
  );
};

export default Plus;
