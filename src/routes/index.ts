
import express,{Router,Request,Response} from 'express';
import login from '../controllers/authentication/login';
import register from '../controllers/authentication/register';

const app=express();
const router=Router();

router.post('/Registration',async(req:Request,res:Response)=>{

    register(req,res);
})
router.post("/login", async (req:Request, res:Response) =>{
   login(req,res);
 })
 export default router;