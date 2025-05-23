import { Outlet } from "react-router";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center min-h-page">
      <div className="max-w-[600px] w-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
