import AxiosClient from "~/api/axios";
import CategoryDetailPage from "~/pages/categories/[categoryId]";

export async function clientLoader() {
  const res = await AxiosClient.get("/mock/hotdeal.json");
  const result = res.data;
  return result;
}

const SubCategoryPage = () => {
  return <CategoryDetailPage />;
};

export default SubCategoryPage;
