import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";
import HideIcon from "~/assets/icons/hide.svg";
import InfoIconImage from "~/assets/icons/info-gray.svg";
import InfoIconRedImage from "~/assets/icons/info-red.svg";
import ShowIcon from "~/assets/icons/show.svg";
import LoginImage from "~/assets/logo/LoginLogo.png";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import Padding from "~/components/ui/padding";
import { TypoBody13 } from "~/components/ui/typo/AnchorsBody13";
import { cn } from "~/lib/utils";
import useUser from "~/stores/useUser";
import useAuthenticate from "./hooks/useAuthenticate";

const InfoIcon = ({ isError }: { isError?: boolean }) => {
  return (
    <img
      src={isError ? InfoIconRedImage : InfoIconImage}
      alt="info"
      className="w-5 h-5"
    />
  );
};

const HideShowIcon = ({ isShow }: { isShow?: boolean }) => {
  return (
    <img src={isShow ? ShowIcon : HideIcon} alt="hide" className="w-4 h-4" />
  );
};

const createLoginSchema = (t: (key: string) => string) =>
  z.object({
    email: z
      .string()
      .min(1, t("form.description.email"))
      .email(t("form.description.email")),
    password: z.string().min(1, t("form.description.password")),
  });

type LoginFormData = z.infer<ReturnType<typeof createLoginSchema>>;

const Login = (): React.JSX.Element => {
  const { t } = useTranslation();
  const loginSchema = createLoginSchema(t);
  const [showPassword, setShowPassword] = useState(false);
  const { mutateAsync: authenticateUser } = useAuthenticate();
  const navigate = useNavigate();
  const { login: loginUser } = useUser();
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      // const loginData = { ...data, password: btoa(data.password) };
      // const userWithToken = await authenticateUser(loginData);
      // const loginUserResponse = userWithToken;

      const MOCK_URSER = {
        user: {
          id: 1234567890,
          name: "홍길동",
          email: "test@test.com",
          phone: "01012345678",
          address: "서울특별시 강남구 테스트동 123-45",
        },
      };

      loginUser(MOCK_URSER.user);
      navigate("/");
      toast.success(t("common.toast.loginSuccess"));
    } catch (error) {
      console.error(error);
      toast.error(t("common.toast.loginFailed"));
    }
  };

  return (
    <div className="flex min-h-screen flex-col  px-4 pt-20">
      <div className="mb-10 flex flex-col items-center gap-4">
        <img src={LoginImage} alt="DIOR" className="h-6 w-auto" />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t("form.placeholder.email")}
                    {...field}
                    className={cn(
                      "px-3 h-9",
                      fieldState.error &&
                        "border-red-500 focus-visible:ring-red-500"
                    )}
                  />
                </FormControl>
                <FormDescription
                  className={cn(
                    fieldState.error && "text-red-500",
                    "flex gap-1 whitespace-pre-line"
                  )}
                >
                  <InfoIcon isError={!!fieldState.error} />
                  {fieldState.error
                    ? fieldState.error.message
                    : t("form.description.email")}
                </FormDescription>
              </FormItem>
            )}
          />
          <Padding height={20} />
          <FormField
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder={t("form.placeholder.password")}
                      {...field}
                      className={cn(
                        "px-3 h-9",
                        fieldState.error &&
                          "border-red-500 focus-visible:ring-red-500"
                      )}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <HideShowIcon isShow={showPassword} />
                    </button>
                  </div>
                </FormControl>
                <FormDescription
                  className={cn(
                    fieldState.error && "text-red-500",
                    "flex gap-1 whitespace-pre-line"
                  )}
                >
                  <InfoIcon isError={!!fieldState.error} />
                  {fieldState.error
                    ? fieldState.error.message
                    : t("form.description.password")}
                </FormDescription>
              </FormItem>
            )}
          />
          <Padding height={40} />
          <div className="flex flex-col gap-4">
            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {t("common.button.login")}
            </Button>
            <Link to="/find-password" className="w-full justify-center">
              <Button
                type="button"
                variant="ghost"
                className="text-[11px] w-full text-text-secondary"
              >
                <TypoBody13>{t("common.button.findPassword")}</TypoBody13>
              </Button>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
