import AuthHeaders from "./components";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center min-h-page">
      <div className="max-w-[600px] pt-[--header-height] w-full flex flex-col">
        <AuthHeaders />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
