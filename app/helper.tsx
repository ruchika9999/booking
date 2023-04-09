import { ConstField } from "./constant/index";
import z from "zod";

export const registerFrom = z.object({
  [ConstField.EMAIL]: z.string().email().or(z.string().default("")),
  [ConstField.PASSWORD]: z.string().min(0).default(""),
  [ConstField.NAME]: z.string().default(""),
});

export const getRegisterFrom = () => {
  return registerFrom.parse({
    [ConstField.EMAIL]: "",
    [ConstField.PASSWORD]: "",
    [ConstField.NAME]: "",
  });
};
