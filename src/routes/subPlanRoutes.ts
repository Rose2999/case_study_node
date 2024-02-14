import express,{Router,Request,Response} from 'express';
import purchased_sub_plan from '../controllers/purchaseSubPLan';

import viewplan from '../controllers/viewsubPlan';
import midddlewareverify from '../middleware/verifyjwt';
import createSubPlan from '../controllers/createSubPlan';

const router=Router();

router.post('/createsubPlan',midddlewareverify,async(req:Request,res:Response)=>{
    createSubPlan(req,res);
})
router.get("/viewsubplan", async (req:Request, res:Response) =>{
   viewplan(req,res);
})
router.post("/purchasesubplan",async(req:Request,res:Response)=>{
    purchased_sub_plan(req,res);
})
 export default router;