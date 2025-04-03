import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as z from "zod";
import HideIcon from "~/assets/icons/hide.svg";
import InfoIconImage from "~/assets/icons/info-gray.svg";
import InfoIconRedImage from "~/assets/icons/info-red.svg";
import ShowIcon from "~/assets/icons/show.svg";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { passwordPattern } from "~/constants/regex";
import { cn } from "~/lib/utils";
import useChangePassword from "./hooks/useChangePassword";
import { toast } from "sonner";
import { useNavigate } from "react-router";

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

const createPasswordSchema = (t: (key: string) => string) =>
  z
    .object({
      currentPassword: z
        .string()
        .min(1, t("me.changePassword.currentPassword-info")),
      newPassword: z
        .string()
        .regex(passwordPattern, t("me.changePassword.newPassword-info")),
      confirmPassword: z
        .string()
        .min(1, t("me.changePassword.confirmPassword-info")),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: t("me.changePassword.passwordMismatch"),
      path: ["confirmPassword"],
    });

export type PasswordFormData = z.infer<ReturnType<typeof createPasswordSchema>>;

const MeChangePasswordIndexPage = () => {
  const { t } = useTranslation();
  const passwordSchema = createPasswordSchema(t);
  const { mutateAsync: changePassword, isPending } = useChangePassword();
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const form = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });
  const handleChangePassowrd = async (data: PasswordFormData) => {
    await changePassword(data);
  };
  const navigate = useNavigate();

  const onSubmit = async (data: PasswordFormData) => {
    try {
      await handleChangePassowrd(data);
      toast.success(t("me.changePassword.success"));
      form.reset();
      navigate("/me");
    } catch (error) {
      toast.error(t("me.changePassword.error"));
    }
  };

  return (
    <div className="px-4 flex flex-col gap-6 pt-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPasswords.current ? "text" : "password"}
                      placeholder={t(
                        "me.changePassword.currentPassword-placeholder"
                      )}
                      {...field}
                      className={cn(
                        "px-3 h-9",
                        fieldState.error &&
                          "border-red-500 focus-visible:ring-red-500"
                      )}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPasswords((prev) => ({
                          ...prev,
                          current: !prev.current,
                        }))
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <HideShowIcon isShow={showPasswords.current} />
                    </button>
                  </div>
                </FormControl>
                <FormDescription
                  className={cn(fieldState.error && "text-red-500", "flex")}
                >
                  <InfoIcon isError={!!fieldState.error} />
                  {fieldState.error
                    ? fieldState.error.message
                    : t("me.changePassword.currentPassword-info")}
                </FormDescription>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newPassword"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPasswords.new ? "text" : "password"}
                      placeholder={t(
                        "me.changePassword.newPassword-placeholder"
                      )}
                      {...field}
                      className={cn(
                        "px-3 h-9",
                        fieldState.error &&
                          "border-red-500 focus-visible:ring-red-500"
                      )}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPasswords((prev) => ({
                          ...prev,
                          new: !prev.new,
                        }))
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <HideShowIcon isShow={showPasswords.new} />
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
                    : t("me.changePassword.newPassword-info")}
                </FormDescription>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPasswords.confirm ? "text" : "password"}
                      placeholder={t(
                        "me.changePassword.confirmPassword-placeholder"
                      )}
                      {...field}
                      className={cn(
                        "px-3 h-9",
                        fieldState.error &&
                          "border-red-500 focus-visible:ring-red-500"
                      )}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPasswords((prev) => ({
                          ...prev,
                          confirm: !prev.confirm,
                        }))
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <HideShowIcon isShow={showPasswords.confirm} />
                    </button>
                  </div>
                </FormControl>
                <FormDescription
                  className={cn(fieldState.error && "text-red-500", "flex")}
                >
                  <InfoIcon isError={!!fieldState.error} />
                  {fieldState.error
                    ? fieldState.error.message
                    : t("me.changePassword.confirmPassword-info")}
                </FormDescription>
              </FormItem>
            )}
          />

          <div className="flex max-w-[600px] w-full gap-4 fixed bottom-0 left-1/2 -translate-x-1/2 border-t border-common-line right-0 bg-white p-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => navigate("/me")}
            >
              {t("me.changePassword.cancel")}
            </Button>
            <Button type="submit" className="flex-1">
              {t("me.changePassword.confirm")}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MeChangePasswordIndexPage;
