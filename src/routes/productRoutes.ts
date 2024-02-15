import express,{Request,Response} from 'express';
import  addProducts from "../controllers/products/addProduct"
import getProducts from '../controllers/products/getProduct';

const router = express.Router();

// Route for customers to accept requests from suppliers
router.post('/addproduct', async (req:Request, res:Response) => {
   addProducts(req,res);
});
router.get('/getproduct',async(req:Request,res:Response)=>{
   getProducts(req,res);
});

export default router;
