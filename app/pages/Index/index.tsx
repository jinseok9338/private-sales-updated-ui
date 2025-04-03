import MainBanner from "./components/mainBanner";
import MainSettingArea from "./components/mainSettingArea";
import PurchaseMainButtonDrawer from "./components/productCard/components/PurchaseDrawer";
import ProductsArea from "./components/productsArea";
import SizeGuideArea from "./components/sizeGuideArea";

const IndexPage = () => {
  return (
    <>
      <MainBanner />
      <SizeGuideArea />
      <MainSettingArea />
      <ProductsArea />
      <PurchaseMainButtonDrawer />
    </>
  );
};

export default IndexPage;
