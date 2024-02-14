
import express,{Request,Response} from 'express';
import accept_Request from '../controllers/acceptRequest';

const router = express.Router();

// Route for customers to accept requests from suppliers
router.post('/acceptRequest', async (req:Request, res:Response) => {
   accept_Request(req,res);
});

export default router;
