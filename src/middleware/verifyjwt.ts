import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';



const midddlewareverify = (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization;
   
    if (!token) {
      return res.status(401).json({ error: "Token not provided" });
    }
   
    token = token?.split("Bearer ")[1];
   
    jwt.verify(token as string, 'your_secret', (err, decoded) => {
        const { user_reg} = decoded as { user_reg: string }||0;
   
      
      if (user_reg === '1') {
        req.body.jwt_decoded = decoded;
        next();
      } else {
        return res.status(403).json({ error: "Access forbidden for this user" });
      }
    });
  };
  
     

        
      export default midddlewareverify;