import Footers from "./footers";
import Headers from "./headers";

const UILayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center min-h-page">
      <div className="max-w-[600px] w-full flex flex-col relative pt-[--header-height] pb-[--footer-height]">
        <Headers />
        {children}
        <Footers />
      </div>
    </div>
  );
};

export default UILayout;
