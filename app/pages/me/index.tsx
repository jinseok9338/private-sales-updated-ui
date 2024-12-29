import { Check, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import Padding from "~/components/ui/padding";
import i18n, { I18N_LANG_EN, I18N_LANG_KO } from "~/lang/i18n";
import { cn } from "~/lib/utils";
import MobileUserPriceLimit from "./components/MobileUserPriceLimit";
import { useNavigate } from "react-router";

const MeIndexPage = () => {
  const user = {
    name: "홍길동",
    email: "user@email.com",
  };

  const data = {
    totalAmount: 10000,
    remainingAmount: 10000,
    usedAmount: 10000,
  };

  const navigate = useNavigate();

  const handleClickLogout = () => {
    alert("로그아웃 되었습니다.");
    navigate("/");
  };
  const handleClickHistory = () => {
    navigate("/order/history");
  };
  const handleClickPasswordChange = () => {
    navigate("/auth/change-password");
  };
  const handleClickLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  const { t } = useTranslation();
  return (
    <div className="p-4">
      <Padding height={8} />
      <div className="flex justify-between">
        <div>
          <div>{user?.name ?? "USER"} 님</div>
          <span className="text-[11px] text-icon-info">
            {user?.email ?? "user@email.com"}
          </span>
        </div>
        <Button onClick={handleClickLogout} variant={"ghost"}>
          {t("common.button.logout")} {/*로그아웃*/}
        </Button>
      </div>
      <Padding height={16} />
      <MobileUserPriceLimit
        availablePrice={data?.totalAmount ?? 0}
        remainingPrice={data?.remainingAmount ?? 0}
        usedPrice={data?.usedAmount ?? 0}
      />
      <hr className="my-4" />
      <div className="flex flex-col gap-3">
        <Button
          onClick={handleClickHistory}
          variant="ghost"
          className="justify-between pl-0 pr-1"
        >
          {t("common.button.history")} {/* 나의 구매 내역 */}
          <ChevronRight className="size-5" />
        </Button>
        <Button
          onClick={handleClickPasswordChange}
          variant="ghost"
          className="justify-between pl-0 pr-1"
        >
          {t("common.button.passwordChange")} {/* 비밀번호 변경 */}
          <ChevronRight className="size-5" />
        </Button>
        <div className={cn("cursor-default")}>Language</div>
        <Button
          onClick={() => handleClickLanguage(I18N_LANG_KO)}
          variant="ghost"
          className={cn(
            "justify-between px-2",
            i18n.language === I18N_LANG_KO && "font-semibold [&>svg]:block"
          )}
        >
          {t("common.button.Ko")} {/* 한국어 */}
          <Check className="hidden" />
        </Button>
        <Button
          onClick={() => handleClickLanguage(I18N_LANG_EN)}
          variant="ghost"
          className={cn(
            "justify-between px-2",
            i18n.language === I18N_LANG_EN && "font-semibold [&>svg]:block"
          )}
        >
          English
          <Check className="hidden" />
        </Button>
      </div>
    </div>
  );
};

export default MeIndexPage;
