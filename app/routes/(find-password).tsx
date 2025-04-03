import { Outlet } from "react-router";
import FindPasswordLayout from "~/layouts/FindPasswordLayout";

const FindPassword = () => {
  return (
    <FindPasswordLayout>
      <Outlet />
    </FindPasswordLayout>
  );
};

export default FindPassword;
