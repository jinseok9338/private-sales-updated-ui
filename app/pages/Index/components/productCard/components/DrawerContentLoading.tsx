import Padding from "~/components/ui/padding";
import { Skeleton } from "~/components/ui/skeleton";

const DrawerContentLoading = () => {
  return (
    <div className="flex flex-col p-4">
      <Skeleton className="h-9 w-full rounded-[4px]" />
      <Padding height={16} />
      <Skeleton className="h-[94px] w-full rounded-[4px]" />
      <Padding height={16} />
      <Skeleton className="h-[1px] w-full rounded-[4px]" />
    </div>
  );
};

export default DrawerContentLoading;
