import { Request, Response } from "express";
import { productServices } from "./product.service";
import { validationProductSchema } from "./product.validation";


//create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const { product } = req.body;
 
    const validProduct = validationProductSchema.parse(product)
    const result = await productServices.createProductDB(validProduct);

    res.status(200).json({
      success: true,
      message: "product created successfully",
      data: result,
    });
  } catch (err:unknown) {
   
    let errorMessage: string;
    if (err instanceof Error) {
        errorMessage = err.message;
    } else {
        errorMessage = "product created failed";
    }

    res.status(500).json({
        success: false,
        message: errorMessage,
        data: "error!!!",
    });
  }
};
 


// get all product 
const GetAllProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string
     

    const result = await productServices.getAllProductDB(searchTerm);
    if (searchTerm) {
      res.status(200).json({
        success: true,
        message: `all ${searchTerm} Products fetched successfully!`,
        data: result,
      });
    }else{
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    }
  
  } catch (err:unknown) {
   
    let errorMessage: string;
    if (err instanceof Error) {
        errorMessage = err.message;
    } else {
        errorMessage = "product created failed";
    }

    res.status(500).json({
        success: false,
        message: errorMessage,
        data: "error!!!",
    });
  }
};

// get single product 
const GetSingleProductDB = async(req:Request, res:Response) =>{
  try{
  const { productId } = req.params;
  const result = await productServices.getSingleProductDB(productId);

   res.status(200).json({
    success: true,
    message: "Products fetched successfully!",
    data: result,
  });
  } catch (err:unknown) {
   
    let errorMessage: string;
    if (err instanceof Error) {
        errorMessage = err.message;
    } else {
        errorMessage = "product created failed";
    }

    res.status(500).json({
        success: false,
        message: errorMessage,
        data: "error!!!",
    });
  }
}

//  update product 


const UpdateProductDB = async(req:Request, res:Response) =>{
  try {
    const productData = req.body;
    const { productId } = req.params;
    const result = await productServices.updateProductDB(productId, productData);
    
    res.status(200).json({
      success: true,
      data: result,
    });

   } catch (err:unknown) {
   
    let errorMessage: string;
    if (err instanceof Error) {
        errorMessage = err.message;
    } else {
        errorMessage = "product created failed";
    }

    res.status(500).json({
        success: false,
        message: errorMessage,
        data: "error!!!",
    });
  }
}

//delete product
const DeleteProduct = async(req:Request, res:Response)=>{
    try{
      const {productId} = req.params
      const result = await productServices.deleteProductDB(productId);
      
      res.status(200).json(
        {
          "success": true,
          "message": "Product deleted successfully!",
          "data":  {
            "success": true,
            "message": "Product deleted successfully!",
            "data": result
         }
       }
      )
     
     }catch (err:unknown) {
   
      let errorMessage: string;
      if (err instanceof Error) {
          errorMessage = err.message;
      } else {
          errorMessage = "product deleted failed";
      }
  
      res.status(500).json({
          success: false,
          message: errorMessage,
          data: "error!!!",
      });
    }
}



export const productControllers = {
  createProduct,
  GetAllProduct,
  GetSingleProductDB,
  UpdateProductDB,
  DeleteProduct
};
