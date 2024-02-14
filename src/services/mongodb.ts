import {MongoClient,ServerApiVersion,Db} from 'mongodb';
import mongoUrl from '../config/mongodb-cofig';
  const client=new MongoClient(mongoUrl,{
    serverApi: {
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    },
  });

 const connectToMongoDb=async():Promise<void>=>{
    try{
        await client.connect();
        const db:Db=client.db("case_study")
        
        await db.command({ping: 1});
        console.log("Pinged your deployment. Succcessfully connected to mongodb");
    }
   catch(err){
    console.log("mongodb error is",err)
   }
 }
const stopMongoDb=async():Promise<void>=>{
    try{
        await client.close();
    }
    catch(error){
        console.log(error);
    }
 }
 export {connectToMongoDb,stopMongoDb}