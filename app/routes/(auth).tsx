import { Outlet } from "react-router";
import AuthLayout from "~/layouts/AuthLayout";

const AuthLayoutIndex = () => {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};

export default AuthLayoutIndex;
