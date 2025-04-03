import Padding from "~/components/ui/padding";
import { Skeleton } from "~/components/ui/skeleton";

const ContentLoadingFooter = () => {
  return (
    <div className="p-4 flex flex-col">
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-[93px] rounded-[4px]" />
        <Skeleton className="h-5 w-[23px] rounded-[4px]" />
      </div>
      <Padding height={16} />
      <Skeleton className="h-11 w-full rounded-[4px]" />
    </div>
  );
};

export default ContentLoadingFooter;
