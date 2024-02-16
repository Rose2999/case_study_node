import { Request, Response } from 'express';
import {Op} from 'sequelize';


const getCardList = async (req: Request, res: Response): Promise<Response<any>> => {
    try {
      const { cardId } = req.body;
  
      // Check if the supplier exists
      const cardFound = await cards.findOne({ where: { card_id: cardId } });
      if (!cardFound) {
        return res.status(404).json({ error: "CardId not found" });
      } else {
        const cardList = await cards.findAll({
          where: {
            [Op.or]: [
              { card_id: cardId },
              { parent_card_id: cardId }
            ]
          },
          attributes: ['card_id', 'email', 'phone', 'job_title']
        });
  
        // Extracting properties from each card
        const response = cardList.map(card=> ({
          card_id: card.card_id,
          email: card.email,
          phone: card.phone,
          job_title: card.job_title
        }));
  
        return res.status(200).json(response);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error in fetching card' });
    }
  };
  
    