

import { Request, Response } from 'express';
import ec_suppliers from "../models/ec_suppliers";
import sub_plan from "../models/sub_plan";

const purchased_sub_plan = async (req: Request, res: Response): Promise<Response<any>> => {
  try {
    const { supplier_id, plan_name } = req.body;
    console.log(typeof(supplier_id),plan_name);
    // Check if the supplier exists
    const supplier = await ec_suppliers.findOne({ where: { id: supplier_id } });
    if (!supplier) {
      return res.status(404).json({ error: "Supplier not found" });
    }

    // Check if the plan exists
    const plan = await sub_plan.findOne({ where: { plan_name: plan_name } });
    if (!plan) {
      return res.status(404).json({ error: "Plan not found" });
    }

    // Update the purchased plan for the supplier
    let result =await ec_suppliers.update(
      { purchased_sub_plan: plan_name },
      { where: { id: supplier_id } }
    );
    console.log(supplier_id,result)
    return res.status(200).json({
      message: `Successfully purchased the plan ${plan_name} for supplier ${supplier_id}`,
    });
  } catch (error) {
    console.error("Error purchasing plan:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default purchased_sub_plan;
