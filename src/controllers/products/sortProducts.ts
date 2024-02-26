import { Request, Response } from "express";
import { MongoClient, Db } from "mongodb";
import mongoUrl from "../../config/mongodb-cofig";

const sortProducts = async (req: Request, res: Response): Promise<any> => {
  const client = new MongoClient(mongoUrl);

  let db: Db = client.db("case_study");
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = 5;
    const offset = (page - 1) * limit;

    const product_category = req.query.product_category as string; // Get the product_name from the request query

    // Define the filter criteria
    const filter: any = {};
    if (product_category) {
      filter.product_category = product_category;
    }

    // Execute the query with filter condition
    const findResult = await db
      .collection("products")
      .find(filter)
      .skip(offset)
      .limit(limit)
      .toArray();
    return res.status(200).json({ data: findResult });
  } catch (error) {
    return res.status(422).json({ error: "Internal server error" });
  }
};

export default sortProducts;
