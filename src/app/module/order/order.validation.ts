import { z } from "zod";

export const validationOrder = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  productId: z.string().nonempty({ message: "Product ID cannot be empty" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  quantity: z
    .number()
    .positive({ message: "Quantity must be a positive number" }),
});
