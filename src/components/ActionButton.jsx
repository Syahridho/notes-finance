import { Link } from "react-router-dom";

const ActionButton = ({ title, icons: Icons, style, objective }) => {
  const styleButton = `flex items-center py-2 px-4 text-sm rounded text-white shadow ${
    style || ""
  }`;
  return (
    <Link to={objective} className={styleButton}>
      {title} <Icons className="text-white ps-1 text-xl" />
    </Link>
  );
};

export default ActionButton;
