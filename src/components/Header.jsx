const Header = ({ balance }) => {
  return (
    <div>
      <h1 className="text-xl text-center mt-8 mb-5 font-semibold text-purple-700">
        FINANCE APP
      </h1>
      <hr className="w-1/2 mx-auto" />
      <h3 className="text-center font-semibold text-lg mt-4">{balance}</h3>
      <p className="text-center text-xs text-slate-400">Sisa uang kamu</p>
    </div>
  );
};

export default Header;
