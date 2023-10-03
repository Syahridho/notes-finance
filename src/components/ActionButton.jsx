const ActionButton = ({ title, icons: Icons, style }) => {
  const styleButton = `flex items-center py-2 px-4 text-sm rounded text-white shadow ${
    style || ""
  }`;
  return (
    <button className={styleButton}>
      {title} <Icons className="text-white ps-1 text-xl" />
    </button>
  );
};

export default ActionButton;
