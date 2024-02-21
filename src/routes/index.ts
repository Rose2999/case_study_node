
import express,{Router,Request,Response, NextFunction} from 'express';
import login from '../controllers/authentication/login';
import register from '../controllers/authentication/register';

const app=express();
const router=Router();
const checkValue='45'
const middlewareapi =(req:Request,res:Response,next:NextFunction)=>{
    if(req.headers['x-api-key']===checkValue){
        res.setHeader("Set-Cookie",["name = Rose","message = hi"]);
        next();
    }
    else {
        return res.status(400).send("error");
    }
}
router.post('/Registration',async(req:Request,res:Response)=>{

    register(req,res);
})
router.post("/login",middlewareapi, async (req:Request, res:Response) =>{
   login(req,res);
 })
 export default router;