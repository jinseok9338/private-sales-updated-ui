import SearchContextProvider from "~/context/search/searchContextProvider";
import SearchIndex from "~/pages/search";

export default function SearchPage() {
  return (
    <SearchContextProvider>
      <SearchIndex />
    </SearchContextProvider>
  );
}
