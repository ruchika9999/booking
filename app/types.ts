import { z } from "zod";
import { registerFrom } from "./helper";

export type RegisterFormType = z.infer<typeof registerFrom>;