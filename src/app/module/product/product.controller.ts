import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product } = req.body;
    console.log(product);
    

    const result = await productServices.createProductDB(product);

    res.status(200).json({
      success: true,
      message: "product created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
 
const GetAllProduct = async (req: Request, res: Response) => {
  try {
 
    const result = await productServices.getAllStudentDB();

    res.status(200).json({
      success: true,
      message: "product created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
 
export const productControllers = {
  createProduct,
  GetAllProduct
};
