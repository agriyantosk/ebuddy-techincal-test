import { z } from "zod";

export const UpdateUserSchema = z.object({
  totalAverageWeightRatings: z.number().min(0).max(5),
  numberOfRents: z.number().int().nonnegative(),
  recentlyActive: z.number(),
});

export type IUpdateUserDTO = z.infer<typeof UpdateUserSchema>;
