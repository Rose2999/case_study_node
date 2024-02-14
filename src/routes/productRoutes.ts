import express,{Request,Response} from 'express';
import  addProducts from "../controllers/products/addProduct"

const router = express.Router();

// Route for customers to accept requests from suppliers
router.post('/addproduct', async (req:Request, res:Response) => {
   addProducts(req,res);
});

export default router;
