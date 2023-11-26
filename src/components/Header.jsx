const Header = ({ saldo }) => {
  return (
    <div className="text-center">
      <h1 className="py-8 text-2xl font-bold text-slate-800">FINANCE APP</h1>
      <p>Sisa Uang Anda</p>
      <p>{saldo}</p>
    </div>
  );
};

export default Header;
