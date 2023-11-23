const Header = ({ balance }) => {
  return (
    <div className="text-center my-10">
      <h1 className="text-3xl font-bold text-purple-700">FINANCE APP</h1>
      <hr className="w-1/2 mx-auto" />
      <h3 className="font-semibold text-lg mt-4">{balance}</h3>
      <p className="text-xs text-slate-400">Sisa uang kamu</p>
    </div>
  );
};

export default Header;
