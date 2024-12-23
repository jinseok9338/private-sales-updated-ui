import { Search, ShoppingBag } from "lucide-react";
import { useLoaderData } from "react-router";
import type { LoaderReturnType } from "~/@types/LoaderReturnType";

import ShoppingButton from "./ShoppingButton";
import type { clientLoader } from "~/routes/(main)";
import SearchInput from "./SearchInput";

const Headers = () => {
  const notification: LoaderReturnType<typeof clientLoader> = useLoaderData();
  return (
    <header className="flex flex-col w-full absolute top-0 h-[--header-height]">
      <div className="w-full px-4 py-3 bg-gray-100">
        <div className="flex items-center gap-4">
          <SearchInput />
          <ShoppingButton />
        </div>
      </div>
    </header>
  );
};

export default Headers;
