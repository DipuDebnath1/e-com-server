import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post("/", OrderController.OrderPost);
router.get("/", OrderController.GetAllOrder);

export const orderRoute = router;
