import express, { Request, Response } from "express";
const app = express();
import cors from "cors";
import { productRoutes } from "./app/module/product/product.route";
import { orderRoute } from "./app/module/order/order.route";
  
app.use(express.json());
app.use(cors());

// application route
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/products", orderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;


// /api/products