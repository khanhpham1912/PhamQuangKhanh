import { wait } from "@/utils/common";

export async function getExchangeResult(amount: number) {
  await wait(1000);
  return amount;
}
