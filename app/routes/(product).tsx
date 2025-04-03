import { Outlet } from "react-router";
import GoodsLayout from "~/layouts/GoodsLayout";

const ProductLayout = () => {
  return (
    <GoodsLayout>
      <Outlet />
    </GoodsLayout>
  );
};

export default ProductLayout;
