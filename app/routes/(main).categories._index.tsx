import CategoriesContextProvider from "~/context/categories/categoriesContextProvider";
import CategoryIndex from "~/pages/categories";

export async function clientLoader() {
  const res = await fetch("/mock/category.json");
  return res.json();
}

export default function CategoryPage() {
  return (
    <CategoriesContextProvider>
      <CategoryIndex />
    </CategoriesContextProvider>
  );
}
