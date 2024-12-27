import { useLoaderData, useSearchParams } from "react-router";
import CategoriesContext from "./categoriesContext";
import type { Category } from "~/@types/category/category";

const CategoriesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const categoriesData = useLoaderData();

  const categories = categoriesData.itemList as Category[];
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategoryId =
    searchParams.get("category_sno") ?? categories[0]?.item.sno.toString();
  const handleSelectCategory = (sno: number) => {
    setSearchParams({ category_sno: sno.toString() });
  };
  return (
    <CategoriesContext.Provider
      value={{
        categories: categories,
        selectedCategoryId: selectedCategoryId,
        handleSelectCategory: handleSelectCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContextProvider;
