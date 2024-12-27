import { useSearchContext } from "~/context/search/searchContext";

const SearchFileter = () => {
  const { ageGroups, selectedAge, handleSelectAge } = useSearchContext();
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
      {ageGroups.map((age) => (
        <button
          key={age}
          onClick={() => handleSelectAge(age)}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-sm ${
            selectedAge === age
              ? "bg-gray-700 text-white"
              : "bg-white text-gray-700 border"
          }`}
        >
          {age}
        </button>
      ))}
    </div>
  );
};
export default SearchFileter;
