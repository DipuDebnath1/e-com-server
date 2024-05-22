"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationOrder = void 0;
const zod_1 = require("zod");
exports.validationOrder = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Invalid email address" }),
    productId: zod_1.z.string().nonempty({ message: "Product ID cannot be empty" }),
    price: zod_1.z.number().positive({ message: "Price must be a positive number" }),
    quantity: zod_1.z
        .number()
        .positive({ message: "Quantity must be a positive number" }),
});
