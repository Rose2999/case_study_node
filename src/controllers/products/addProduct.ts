
import { Request, Response } from "express";
import { MongoClient, Db, InsertOneResult } from "mongodb";
import mongoUrl from "../../config/mongodb-cofig";
 
// Assuming you have the MongoClient already initialized somewhere in your code
const client = new MongoClient(mongoUrl);
 
const addProducts = async (req: Request, res: Response): Promise<any> => {
  try {
    const products:{ product_category:string, product_name:string, photo:string, stock:string, product_price:string}[] =req.body;
    // const { product_category, product_name, photo, stock, product_price } = req.body; 
    
    const case_study: Db = client.db("case_study");
    
 
    // Access the 'products' collection and insert a new product
    const result = await case_study.collection('products').insertMany(
      products
    );
    console.log(result)
    // Check if the insertion was successful
    if (result) {
      return res.status(201).json({ message: "Product added successfully" });
    } else {
      return res.status(500).json({ message: "Failed to add product" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  } 
};
 
export default addProducts;
 