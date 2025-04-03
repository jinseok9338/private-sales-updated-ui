import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { TypoBody13 } from "~/components/ui/typo/AnchorsBody13";
import { TypoSubtleMedium } from "~/components/ui/typo/AnchorsSubtle";
import { cn } from "~/lib/utils";
import useSendFindPasswordEmail from "./hooks/useSendFIndPasswordEmail";
import { toast } from "sonner";

const createFindPasswordSchema = (t: (key: string) => string) =>
  z.object({
    email: z
      .string()
      .min(1, t("form.validation.email.required"))
      .email(t("form.validation.email.invalid")),
  });

type FindPasswordFormData = z.infer<
  ReturnType<typeof createFindPasswordSchema>
>;

const FindPasswordPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const findPasswordSchema = createFindPasswordSchema(t);
  const { mutateAsync: sendFindPasswordEmail, isPending } =
    useSendFindPasswordEmail();

  const form = useForm<FindPasswordFormData>({
    resolver: zodResolver(findPasswordSchema),
  });

  const onSubmit = async (data: FindPasswordFormData) => {
    try {
      await sendFindPasswordEmail(data.email);
      toast.success(t("findPassword.success"));
      form.reset();
      navigate("/login");
    } catch (error) {
      toast.error(t("findPassword.error"));
    }
  };

  return (
    <div className="px-4 flex flex-col gap-10 pt-10">
      <TypoBody13 className="whitespace-pre-line text-text-secondary">
        {t("form.description.findPassword")}
      </TypoBody13>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-col gap-2">
                    <TypoSubtleMedium>
                      {t("common.label.email")}
                    </TypoSubtleMedium>
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
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex max-w-[600px] w-full gap-4 fixed bottom-0 left-1/2 -translate-x-1/2 border-t border-common-line right-0 bg-white p-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => navigate(-1)}
            >
              {t("common.button.cancel")}
            </Button>
            <Button type="submit" className="flex-1">
              {t("common.button.send")}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FindPasswordPage;
