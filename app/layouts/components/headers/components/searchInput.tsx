import { Input } from "~/components/ui/input";
import SearchIcon from "~/assets/icons/search-black.svg";

const SearchInput = () => {
  return (
    <div className="relative w-full">
      <Input
        placeholder="상품코드를 입력해주세요"
        className="h-[36px] w-full"
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
        <img src={SearchIcon} alt="Search" width={18} height={18} />
      </div>
    </div>
  );
};

export default SearchInput;
