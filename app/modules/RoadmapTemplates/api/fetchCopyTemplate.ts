"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

export default async function fetchCopyTemplate(id: string) {
  try {
    void axiosWithAuth({
      method: "POST",
      url: `/templates/copy/${id}`,
    });
  } catch (error) {
    console.error(error);
  }
}