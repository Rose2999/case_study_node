
import express,{Router,Request,Response} from 'express';
import invite_customer from '../controllers/InviteCustomer';

const router = express.Router();

// Route for supplier to send requests to people to be their customers
router.post('/getCardList', async (req:Request, res:Response) => {
    getCardList(req,res);
});

export default router;
