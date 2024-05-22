import express from "express";
import { productControllers } from "./product.controller";

const router = express.Router();

router.post("/create-product", productControllers.createproduct);
router.get("/", productControllers.getAllproduct);
router.get("/:productId", productControllers.getAproduct);

export const productRoutes = router;
