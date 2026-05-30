import { z } from "zod"

export const shortenSchema = z.object({
  url: z
    .string()
    .min(1, "Please add a link.")
    .url("Please enter a valid URL."),
})

export type ShortenFormData = z.infer<typeof shortenSchema>