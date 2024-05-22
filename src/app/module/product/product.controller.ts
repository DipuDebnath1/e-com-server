import { Request, Response } from "express";
import { productServices } from "./product.service";

const createproduct = async (req: Request, res: Response) => {
  try {
    const { product } = req.body;

    const result = await productServices.createproductDB(product);

    res.status(200).json({
      success: true,
      message: "product created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllproduct = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllproductDB();

    res.status(200).json({
      success: true,
      message: "product retrieved successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAproduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getAproductDB(productId);
    res.status(200).json({
      success: true,
      message: "single product find successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const productControllers = {
  createproduct,
  getAllproduct,
  getAproduct,
};
