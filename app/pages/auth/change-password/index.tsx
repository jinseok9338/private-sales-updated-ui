import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import Padding from "~/components/ui/padding";
import PasswordInput from "~/components/ui/passwordInput";
import HeadingS from "~/components/ui/typo/heading_s";
import { passwordPattern } from "~/constants/regex";

const PasswordChangePage = () => {
  const { t } = useTranslation();

  const PASSWORD_ERROR_MESSAGE = "form.message.passwordConditionsError"; //비밀번호 설정 규칙에 어긋납니다. 다시 확인해주세요.
  const REQUIRE_MESSAGE = "form.message.required";

  const formSchema = z
    .object({
      oldPassword: z
        .string({ required_error: REQUIRE_MESSAGE })
        .min(8, { message: PASSWORD_ERROR_MESSAGE })
        .max(50)
        .regex(passwordPattern, { message: PASSWORD_ERROR_MESSAGE }),
      newPassword: z
        .string({ required_error: REQUIRE_MESSAGE })
        .min(8, { message: PASSWORD_ERROR_MESSAGE })
        .max(50)
        .regex(passwordPattern, { message: PASSWORD_ERROR_MESSAGE }),
      confirmPassword: z
        .string({ required_error: REQUIRE_MESSAGE })
        .min(8, { message: PASSWORD_ERROR_MESSAGE })
        .max(50)
        .regex(passwordPattern, { message: PASSWORD_ERROR_MESSAGE }),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: t("form.message.wrongPassword"),
      path: ["confirmPassword"],
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {};

  return (
    <Form {...form}>
      <Padding height={20} />
      <HeadingS className="text-2xl font-bold mb-6">비밀번호 변경</HeadingS>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 justify-center p-4"
      >
        <FormField
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.title.oldPassword")}</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder={t("form.placeholder.oldPassword")}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {t("form.description.oldPassword")}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.title.newPassword")}</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder={t("form.placeholder.newPassword")}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {t("form.description.newPassword")}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.title.confirmPassword")}</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder={t("form.placeholder.confirmPassword")}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {t("form.description.confirmPassword")}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => console.log("Cancel")}
          >
            {t("common.button.cancel")}
          </Button>
          <Button type="submit">{t("common.button.ok")}</Button>
        </div>
      </form>
    </Form>
  );
};

export default PasswordChangePage;
