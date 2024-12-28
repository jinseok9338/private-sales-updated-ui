import { ArrowLeft } from "lucide-react";

const AuthHeaders = () => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <header className="flex flex-col w-full absolute top-0 h-[--header-height]">
      <div className="w-full px-4 py-3 bg-gray-100">
        <div className="flex items-center gap-4">
          <div onClick={handleGoBack}>
            <ArrowLeft />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AuthHeaders;
