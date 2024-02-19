import ec_customer from "../../models/ec_customers";
import {Request,Response} from 'express';
import AWS from 'aws-sdk';
import {Readable} from "stream";
import { ManagedUpload } from "aws-sdk/clients/s3";
const s3=new AWS.S3({
    accessKeyId:`AKIA2QYRVEQDTKJ4R4P3`,
    secretAccessKey:`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`,
})
export const s3uploadAsync = async (params: AWS.S3.PutObjectAclRequest): Promise<string> => {
    return new Promise((resolve, reject) => {
        s3.upload(params, (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.Location);
            }
        });
    });
};

const customerRegister=async(req:Request,res:Response)=>{
    const file=req?.file as Express.Multer.File;

     const  params:AWS.S3.PutObjectRequest={
        Bucket:'rose2000',
        Key:file?.originalname,
        Body:Readable.from(file?.buffer),
        ContentType:file?.mimetype,
     } ;
     try {
        const profile_pic_url=await s3uploadAsync(params);
    

    const { full_name ,e_mail, password,profile_pic,user_type} = req.body;



    if (!full_name) {
        return res.status(422).send("no name");
    }
    if (!e_mail) {
        return res.status(422).send("no email");
    }
    if (!password) {
        return res.status(422).send("no password");
    }
    if (!profile_pic) {
        return res.status(422).send("no profilepic");
    }
    if (!user_type) {
        return res.status(422).send("no user_type");
    }
    if(user_type=='customer'){
    try{
     await ec_customer.create({full_name:full_name,e_mail:e_mail,password:password,profile_pic:profile_pic_url})
     return res.status(200).send("Customer created successfully");
    }
    catch(error:any){
        console.log(error);
        return res.status(404).send("Customer not created");
    }}
    
    return res.status(200).json(`From the contact, name is ${full_name} with email ${e_mail} password is ${password} and profile pic is ${profile_pic}`);
}
catch(error:any){
    console.log(error);
    return res.status(404).send("error");
}}
export default customerRegister;