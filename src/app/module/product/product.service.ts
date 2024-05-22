import { productModel } from "../product.model";
import { product } from "./product.interface";

const createproductDB = async (product: product) => {
  const res = await productModel.create(product);
  return res;
};
const getAllproductDB = async () => {
  const res = await productModel.find();
  return res;
};

const getAproductDB = async (id: string) => {
  const res = await productModel.findOne({ id });
  return res;
};

export const productServices = {
  createproductDB,
  getAllproductDB,
  getAproductDB,
};
