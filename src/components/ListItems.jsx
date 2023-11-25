import List from "./List";

const ListItems = ({ moneys, onDelete, format }) => {
  return (
    <>
      {moneys.map((money) => (
        <List
          key={money.id}
          id={money.id}
          title={money.title}
          date={money.date}
          balance={money.balance}
          income={money.income}
          onDelete={onDelete}
          format={format}
          {...money}
        />
      ))}
    </>
  );
};

export default ListItems;
