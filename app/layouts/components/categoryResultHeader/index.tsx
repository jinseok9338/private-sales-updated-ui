import CategorySelect from "./components/CategorySelect";
import IconContainer from "./components/IconContainer";

const CategoryResultHeader = ({
  isSelectOpen,
  toggleOpen,
}: {
  isSelectOpen: boolean;
  toggleOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div className="flex bg-common-white z-50 fixed top-0 left-0 w-full justify-between py-3 px-4 gap-2 items-center">
      <CategorySelect isSelectOpen={isSelectOpen} toggleOpen={toggleOpen} />
      <IconContainer />
    </div>
  );
};

export default CategoryResultHeader;
