
import express,{Router,Request,Response} from 'express';
import invite_customer from '../controllers/InviteCustomer';

const router = express.Router();

// Route for supplier to send requests to people to be their customers
router.post('/sendInvite', async (req:Request, res:Response) => {
    invite_customer(req,res);
});

export default router;
