import ec_suppliers from "../models/ec_suppliers";
import ec_customer from "../models/ec_customers";
import sub_plan from "../models/sub_plan";
import { Request, Response } from 'express';
import ec_Customer_Supplier_Mapping from "../models/ec_customer_supplier_mapping";
const invite_customer = async (req: Request, res: Response): Promise<Response<any>> => {
    try {
      const { supplier_id, customer_id,sb_id} = req.body;
      console.log(typeof(supplier_id));
      // Check if the supplier exists
      const supplier = await ec_suppliers.findOne({ where: { id: supplier_id } });
      if (!supplier) {
        return res.status(404).json({ error: "Supplier not found" });
      }
  
      // Check if the plan exists

      const plan = await sub_plan.findOne({ where: { sb_id: sb_id } });
      if (!plan) {
        return res.status(404).json({ error: "Plan not found" });
      }
      const customer = await ec_customer.findOne({ where: { id:customer_id } });
      if (!customer) {
        return res.status(404).json({ error: "CUstomer not found" });
      }
    const findCount=await ec_Customer_Supplier_Mapping.count({ where: { supplier_id:supplier_id,status:"accepted"} });
    
      
      
    
    {
        const new_invitee = await ec_Customer_Supplier_Mapping.create({
            supplier_id,
            customer_id,
            sb_id,
            status:"pending"
          });
    if(new_invitee){
          return res.status(201).json({ message: 'Invite send successfully', data: new_invitee });
    }
    else{
 
        return res.status(403).json({ error: 'Enter all neccessary details' });
 
    }
}}
catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error in sending invitation' });
  }

}
  export default invite_customer;
  