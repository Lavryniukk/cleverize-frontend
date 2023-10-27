"use server";

import { getAccessToken } from "@auth0/nextjs-auth0";

let api = async () => {
  const { accessToken } = await getAccessToken();
  console.log(accessToken);
  let res = await fetch("http://localhost:5000/protected", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  let data = await res.json();
  return data;
};
export default api;
