import { Request, Response } from 'express';
import { MongoClient, Db,SortDirection } from 'mongodb';
import mongoUrl from "../../config/mongodb-cofig";

const getProducts = async (req: Request, res: Response): Promise<any> => {
    const client = new MongoClient(mongoUrl);

    let db: Db = client.db("case_study");

    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = 5;
        const offset = (page - 1) * limit;
 
        const sortField = req.query.sortField as string;
        
        const sortOrderNumber = parseInt(req.query.sortOrder as string) || 1;
        const sortOrder: SortDirection = sortOrderNumber === 1 ? 1 : -1;
        const sortOption: [string, SortDirection] = [sortField, sortOrder];
 
        const findResult = await db.collection('products').find().sort(sortOption).skip(offset).limit(limit).toArray();
        //return res.status(200).json({data:findResult});

        const searchRegex = new RegExp(req.query.search as string, 'i');
        const findResult2 = await db.collection('products').find({$or:[{product_name:{$regex:searchRegex}}]}).toArray();
        return res.status(200).json({data:findResult2});
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    } finally {
        await client.close(); // Close the MongoDB client connection
    }
}

export default getProducts;
