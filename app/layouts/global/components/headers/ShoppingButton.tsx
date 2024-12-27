import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";
import FeedbackLink from "~/components/ui/Link";

const ShoppingButton = () => {
  return (
    <FeedbackLink to="/cart">
      <button className="p-2">
        <ShoppingBag size={24} />
      </button>
    </FeedbackLink>
  );
};

export default ShoppingButton;
