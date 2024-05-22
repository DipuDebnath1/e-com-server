import express from "express";
import { productControllers } from "./product.controller";

const router = express.Router();

router.post("/", productControllers.createProduct);
router.get("/", productControllers.GetAllProduct);
router.get("/:productId", productControllers.GetSingleProductDB);
router.put("/:productId", productControllers.UpdateProductDB);

export const productRoutes = router;
