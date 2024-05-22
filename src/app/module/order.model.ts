import mongoose, { Schema, model } from "mongoose";
import { Orders } from "./order/order.interface";

const OrderSchema = new Schema<Orders>({
  email: { type: String, required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const OrderModel = model<Orders>("order", OrderSchema);
