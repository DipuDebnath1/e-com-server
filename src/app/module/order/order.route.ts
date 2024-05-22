import express from "express"
import { OrderController } from "./order.controller";
import validateOrder from "./order.validation.midlewere";

const router = express.Router() 

router.post('/', OrderController.OrderPost);
router.get('/' , OrderController.GetAllOrder);



export const orderRoute =  router