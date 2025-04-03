import Terms from "./components/Terms";
import FloatingButton from "./components/floatingButton";
import Footers from "./components/footers";
import Headers from "./components/headers";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center min-h-page">
      <div className="max-w-[600px] w-full flex flex-col relative pt-[152px] pb-[56px]">
        <Headers />
        {children}
        <Terms />
        <Footers />
        <FloatingButton />
      </div>
    </div>
  );
};

export default MainLayout;
