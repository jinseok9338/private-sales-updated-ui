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

const formSchema = z.object({
  email: z
    .string()
    .min(1, "form.message.enterEmail")
    .email({ message: "form.message.emailFormatIncorrect" }),
});

const FindPasswordPage = () => {
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {};
  return (
    <>
      <p className="whitespace-pre-line text-[13px] text-text-secondary">
        {t("form.description.findPassword")}
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 justify-center p-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.placeholder.email")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("form.placeholder.email")}
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">{t("common.button.ok")}</Button>
        </form>
      </Form>
    </>
  );
};

export default FindPasswordPage;
