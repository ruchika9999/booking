import { z } from "zod";
import { loginFrom, registerFrom } from "./helper";

export type RegisterFormType = z.infer<typeof registerFrom>;

export type LoginFormType = z.infer<typeof loginFrom>;