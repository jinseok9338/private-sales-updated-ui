import { parseAsBoolean, useQueryState } from "nuqs";
import AcDrawer from "~/components/ui/new-drawer";
import {
  TypoBody13,
  TypoBody13Semibold,
} from "~/components/ui/typo/AnchorsBody13";
import { GRAPH_DRAWER_OPEN } from "~/constants/QueryStringKeys";
import useGetQuota from "~/pages/Index/hooks/useGetQuota";

const GraphDrawer = () => {
  const [graphDrawerOpen, setGraphDrawerOpen] = useQueryState(
    GRAPH_DRAWER_OPEN.key,
    parseAsBoolean.withDefault(GRAPH_DRAWER_OPEN.defaultValue)
  );

  const { data: quota } = useGetQuota();
  const quotaData = quota ?? [];

  return (
    <AcDrawer
      isOpen={graphDrawerOpen}
      //   direction="top"
      onClose={() => setGraphDrawerOpen(false)}
    >
      <div className="w-full h-full flex flex-col bg-common-white p-4">
        {quotaData.map((item) => (
          <div key={item.category} className="flex py-2 gap-2">
            <TypoBody13 className="text-gray-600">{item.category}</TypoBody13>
            <TypoBody13Semibold className="text-common-black">
              {item.quota}
            </TypoBody13Semibold>
          </div>
        ))}
      </div>
    </AcDrawer>
  );
};

export default GraphDrawer;
