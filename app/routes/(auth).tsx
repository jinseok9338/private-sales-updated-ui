import { Outlet } from "react-router";
import AuthLayout from "~/layouts/auth";

const AuthLayoutIndex = () => {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};

export default AuthLayoutIndex;
