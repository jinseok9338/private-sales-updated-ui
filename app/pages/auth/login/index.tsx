import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import PasswordInput from "~/components/ui/passwordInput";
import { cn, isDev } from "~/lib/utils";
import LanguageButton from "./components/language-toggle";
import { formSchema } from "./components/loginSchema";

const Login = (): React.JSX.Element => {
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: isDev() ? import.meta.env.VITE_APP_DEV_EMAIL ?? "" : "",
      password: isDev() ? import.meta.env.VITE_APP_DEV_PASSWORD ?? "" : "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <div className="flex h-screen  flex-col items-stretch justify-center gap-6 p-4 ">
      <div className="mb-12 flex items-center justify-between">
        <h1 className="font-bold text-[32px] text-black">LOGIN</h1>
        <LanguageButton />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>{t("common.label.email")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("form.placeholder.email")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-6 flex flex-col gap-2">
                <FormLabel>{t("common.label.password")}</FormLabel>{" "}
                {/* 비밀번호 */}
                <FormControl>
                  <PasswordInput
                    placeholder={t("form.placeholder.password")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size={"lg"} className="mt-12 w-full">
            {t("common.button.login")}
          </Button>
        </form>
      </Form>

      <Button
        type="button"
        variant={"link"}
        className={cn("text-[11px] text-text-secondary")}
      >
        {t("common.button.findPassword")}
      </Button>
    </div>
  );
};

export default Login;
