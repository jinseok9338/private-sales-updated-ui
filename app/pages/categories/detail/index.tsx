import SettingArea from "~/pages/Index/components/SettingArea";
import CategoryResultProductArea from "./components/categoryResultProductArea";
import PurchaseMainButtonDrawer from "~/pages/Index/components/productCard/components/PurchaseDrawer";

const CategoryDetailPage = () => {
  return (
    <div className="flex flex-col">
      <SettingArea />
      <CategoryResultProductArea />
      <PurchaseMainButtonDrawer />
    </div>
  );
};

export default CategoryDetailPage;
