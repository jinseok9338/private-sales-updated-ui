import type { PasswordFormData } from "..";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const changePassword = async (data: PasswordFormData) => {
  await delay(1000);

  return {
    success: true,
  };
};

export default changePassword;
