import express, { Request, Response } from "express";
const app = express();
import cors from "cors";
import { productRoutes } from "./app/module/product/product.route";
import { orderRoute } from "./app/module/order/order.route";
import bodyParser from "body-parser";
  
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// application route
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;


// /api/products