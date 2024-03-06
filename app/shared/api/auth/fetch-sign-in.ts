import { axiosWithoutAuth } from "../../config";

type fetchSignUpArgs = {
  email: string;
  password: string;
};
export async function fetchSignIn(data: fetchSignUpArgs): Promise<any> {
  try {
    const res = await axiosWithoutAuth("/auth/sign-in", {
      method: "POST",
      data,
    });

    return { ok: true, data: res.data };
  } catch (error) {
    return { ok: false, data: error };
  }
}