"use server";
import { axiosWithAuth } from "../config/axiosConfig";
import { Subscription } from "../entities";

export default async function fetchSubscription(): Promise<Subscription> {
  const response: { data: Subscription } = await axiosWithAuth({
    url: "/subscriptions/subscription-data",
    method: "GET",
  });
  return response.data;
}
