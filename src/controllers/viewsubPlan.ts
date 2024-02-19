import express, { Request, Response } from "express";
import sub_plan from "../models/sub_plan";
 
const viewplan = async (req:Request, res: Response): Promise<any> => {
 
    try{
 
    const subscriptionPlan = await sub_plan.findAll();
     return res.status(200).json({message:subscriptionPlan});
 
    }
    catch(error){
        console.log(error);
        return res.status(422).json({error:'Internal server error'});
    }
}
 
export default viewplan;