import GraphBlack from "~/assets/icons/graph-black.svg";

import CartIconBlack from "./CartIconBlack";

import { parseAsBoolean, useQueryState } from "nuqs";
import { GRAPH_DRAWER_OPEN } from "~/constants/QueryStringKeys";

const IconsContainer = () => {
  const [graphDrawerOpen, setGraphDrawerOpen] = useQueryState(
    GRAPH_DRAWER_OPEN.key,
    parseAsBoolean.withDefault(GRAPH_DRAWER_OPEN.defaultValue)
  );

  const handleGraphDrawerOpen = () => {
    setGraphDrawerOpen(!graphDrawerOpen);
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <img
          src={GraphBlack}
          alt="GraphBlack"
          width={28}
          height={28}
          loading="lazy"
          className="cursor-pointer"
          onClick={handleGraphDrawerOpen}
        />

        <CartIconBlack />
      </div>
    </>
  );
};

export default IconsContainer;
