import { Outlet } from "react-router";
import ChangePasswordLayout from "~/layouts/ChangePasswordLayout";

const ChangePasswordPage = () => {
  return (
    <ChangePasswordLayout>
      <Outlet />
    </ChangePasswordLayout>
  );
};

export default ChangePasswordPage;
