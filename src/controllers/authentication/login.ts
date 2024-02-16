import ec_suppliers from "../../models/ec_suppliers";
import express, { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import ec_customer from "../../models/ec_customers";
const login = async (req: Request, res: Response): Promise<Response<any>> => {
    try {
      const { password, e_mail, user_type } = req.body;
   
      // Check if user_type is "supplier" or "customer"
      if (user_type === "supplier" || user_type === "customer") {
        const model = user_type === "supplier" ? ec_suppliers : ec_customer;
   
        const user = await model.findOne({
          where: {
            e_mail: e_mail,
          },
        });
   
        if (user !== null) {
          if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign(
              { user_reg: user?user.registration_id:user_type },
              "your_secret",
              { expiresIn: "24h" }
            );
            return res.status(200).json({
              token,
              message: "Login successful",
              user: user.id,
              client_type: user_type,
            });
          } else {
            // Handle the case where the password doesn't match
            return res.status(400).json({ error: "Invalid credentials" });
          }
        } else {
          // Handle the case where the user (supplier or customer) is not found
          return res.status(400).json({ error: "Invalid credentials" });
        }
      } else {
        // Handle the case where the user type is neither "supplier" nor "customer"
        return res.status(400).json({ error: "Wrong user type" });
      }
    } catch (error: any) {
      console.log(error);
      return res.status(401).json({ error: "Login error" });
    }
  };
   
  export default login;