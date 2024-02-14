import { Request, Response } from 'express';
import ec_suppliers from '../models/ec_suppliers';
import ec_customer from '../models/ec_customers';
import ec_Customer_Supplier_Mapping from '../models/ec_customer_supplier_mapping';



const send_Request = async (req: Request, res: Response): Promise<Response<any>> => {
    try {
        
        const {supplierId, customerId } = req.body;

        // Check if the supplier exists
        const supplier = await ec_suppliers.findByPk(supplierId);
        if (!supplier) {
            return res.status(404).json({ error: 'Supplier not found' });
        }

        // Check if the customer exists
        const customer = await ec_Customer_Supplier_Mapping.findByPk(customerId);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        // Logic to send request from supplier to customer
        // Example: Create a new record in the ec_customer_supplier_mapping tableid
        const newMapping = await ec_Customer_Supplier_Mapping.create({
            supplierId: supplierId,
            customerId: customerId,
            status: 'pending' // Example status
        });

        return res.status(200).json({ message: 'Request sent successfully', data: newMapping });
    } catch (error) {
        console.error('Error sending request:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
export default send_Request;