import { useNavigate } from "react-router";
import GoodsHeaderIconContainer from "./IconContainer";
import BackIcon from "~/assets/icons/arrow-left-black.svg";

const GoodsHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between py-3 px-4 gap-2 items-center">
      <button
        className="flex items-center cursor-pointer relative"
        onClick={() => navigate(-1)}
      >
        <img src={BackIcon} alt="back" className="w-7 h-7" />
      </button>
      <GoodsHeaderIconContainer />
    </div>
  );
};

export default GoodsHeader;
