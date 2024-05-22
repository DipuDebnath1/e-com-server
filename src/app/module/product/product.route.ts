import express from "express";
import { productControllers } from "./product.controller";

const router = express.Router();

router.post("/create-product", productControllers.createProduct);
router.get("/create-product", productControllers.GetAllProduct);
 

export const productRoutes = router;
