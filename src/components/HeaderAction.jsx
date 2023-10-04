import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeaderAction = ({ title }) => {
  return (
    <div className="flex m-6 justify-center items-center relative">
      <Link to={"/"} className="absolute left-0">
        <BsArrowLeftCircle className="text-2xl" />
      </Link>
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
};

export default HeaderAction;
