import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";

const ShoppingButton = () => {
  return (
    <Link to="/cart">
      <button className="p-2">
        <ShoppingBag size={24} />
      </button>
    </Link>
  );
};

export default ShoppingButton;
