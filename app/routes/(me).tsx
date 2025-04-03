import { Outlet } from "react-router";
import MyPageLayout from "~/layouts/MyPageLayout";

const Me = () => {
  return (
    <MyPageLayout>
      <Outlet />
    </MyPageLayout>
  );
};

export default Me;
