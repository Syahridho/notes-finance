const CardItem = ({ title, date, balance, style, icons: Icons }) => {
  // not usesable
  const formatCurrency = (data) => {
    return new Number(data).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <div className={`bg-${style}-500 inline-block p-1.5 rounded`}>
          <Icons className={`text-white`} />
        </div>
        <div>
          <h1 className="text-sm">{title}</h1>
          <p className="text-xs text-slate-400">{date}</p>
        </div>
      </div>
      <p className={`self-center font-semibold text-${style || ""}-800`}>
        {formatCurrency(balance)}
      </p>
    </div>
  );
};

export default CardItem;
