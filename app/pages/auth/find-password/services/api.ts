import API from "~/api/ky";

export type FindPasswordRequest = {
  email: string;
};

const sendFindPasswordEmail = async (email: string) => {
  const request: FindPasswordRequest = { email };
  return await API.post('api/auth/password', { json: request }).json();
};

export default sendFindPasswordEmail;
