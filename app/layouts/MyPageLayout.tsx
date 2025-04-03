import { Outlet } from "react-router";
import Footers from "./components/footers";
import MyPageHeader from "./components/myPageHeader";

const MyPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center min-h-page">
      <div className="max-w-[600px] w-full flex flex-col relative pb-[56px]">
        <MyPageHeader />
        <Outlet />
        <Footers />
      </div>
    </div>
  );
};

export default MyPageLayout;
