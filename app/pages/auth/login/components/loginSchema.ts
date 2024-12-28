import { z } from "zod";
import { passwordPattern } from "~/constants/regex";
import { isDev } from "~/lib/utils";

export const formSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "form.placeholder.email" })
    .email({ message: "form.message.emailFormatIncorrect" }),
  password: isDev()
    ? z
        .string()
        .trim()
        .min(1, { message: "form.placeholder.password" })
        .min(8, { message: "form.message.minimumPasswordRequirement" })
    : z
        .string()
        .trim()
        .min(1, { message: "form.placeholder.password" })
        .min(8, { message: "form.message.minimumPasswordRequirement" })
        .regex(passwordPattern, {
          message: "form.message.passwordConditions",
        }),
});
