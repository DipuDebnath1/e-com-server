import { Schema, model, connect } from "mongoose";
import { Orders } from "./order/product.interface";

const orderSchema = new Schema<Orders>({
    email:{type: String, required:true},
    productId:{type: String, required:true},
    price:{type: Number, required:true},
    quantity:{type: Number, required:true} 
})

export const OrderModel = model<Orders>('order', orderSchema);