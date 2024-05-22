import { orderService } from "./order.service"
import { Request, Response } from "express";
import { validationOrder } from "./order.validation";
 // post order
const OrderPost = async (req: Request, res: Response) => {
  try {
    const { email, productId, price, quantity } = req.body;
    const result = await orderService.postOrderDB(
      email,
      productId,
      price,
      quantity
    );
    res.status(200).json({
      success: true,
      message: `Order created successfully!`,
      data: result,
    });
  }catch (err:unknown) {
   
    let errorMessage: string;
    if (err instanceof Error) {
        errorMessage = err.message;
    } else {
        errorMessage = "order created failed";
    }

    res.status(500).json({
        success: false,
        message: errorMessage,
        data: "error!!!",
    });
  }
};


// get all order 
const GetAllOrder =async (req:Request, res:Response) =>{
try{
    const email = req.query.email as string
    const result = await orderService.findAllOrder(email)
res.status(200).json({
    success:true,
    data:result
})
}catch(err){
    res.status(500).json({
        success:true,
        data:'error'
    })
}    
}
export const OrderController = {
    OrderPost,
    GetAllOrder
}