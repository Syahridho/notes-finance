const CardStatus = ({ icons: Icons, title, money, transaction }) => {
  return (
    <div className="w-40 h-32 p-3 bg-white rounded shadow-sm">
      <div className="bg-purple-100 inline-block p-1 rounded">
        <Icons style={{ fontweight: "lighter" }} />
      </div>
      <h4 className="text-slate-300 text-xs">{title}</h4>
      <h1 className="text-sm font-semibold py-1">{money}</h1>
      <p className="text-xs text-slate-300">
        <span className="text-purple-500 font-semibold">{transaction}</span>{" "}
        Transaksi
      </p>
    </div>
  );
};

export default CardStatus;
