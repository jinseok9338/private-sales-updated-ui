import AxiosClient from "~/api/axios";
import { CategoryDetailContextProvider } from "~/context/categories/[categoryId]/categoryDetailContextProvider";
import CategoryDetailPage from "~/pages/categories/[categoryId]";

export async function clientLoader() {
  const res = await AxiosClient.get("/mock/hotdeal.json");
  const result = res.data;
  return result;
}

const SubCategoryPage = () => {
  return (
    <CategoryDetailContextProvider>
      <CategoryDetailPage />
    </CategoryDetailContextProvider>
  );
};

export default SubCategoryPage;
