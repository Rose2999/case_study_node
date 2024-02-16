import ec_suppliers from '../models/ec_suppliers';
import ec_Customer_Supplier_Mapping from '../models/ec_customer_supplier_mapping';
import { Request, Response } from 'express';


const accept_Request = async (req: Request, res: Response): Promise<Response<any>> => {
    try {
        
        const { customerId,supplierId} = req.body;

        // Check if the customer exists
        const customer = await ec_Customer_Supplier_Mapping.findByPk(customerId);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        // Check if the supplier exists
        const supplier = await ec_suppliers.findByPk(supplierId);
        if (!supplier) {
            return res.status(404).json({ error: 'Supplier not found' });
        }


        const accepted=await ec_Customer_Supplier_Mapping.update(
            { status: 'accepted' },
            { where: { customerId: customerId, supplierId: supplierId } }
        );

        return res.status(200).json({ message: 'Request accepted successfully' });
        
    } catch (error) {
        console.error('Error accepting request:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
export default accept_Request;
