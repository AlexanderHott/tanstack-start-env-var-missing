import process from "node:process";
import { createServerFn } from "@tanstack/react-start";

export const getServerSecret = createServerFn({ method: "GET" }).handler(() => {
  return process.env.SECRET;
});
