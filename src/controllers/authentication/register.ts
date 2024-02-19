import ec_suppliers from '../../models/ec_suppliers';
import {Request,Response} from 'express';
import customerRegister from './customerRegister';



const register=async(req:Request,res:Response)=>{
      
    const { full_name ,e_mail, password,profile_pic,user_type,subscription_plan} = req.body;
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
    if(user_type=='supplier'||user_type=='Supplier'){
    try{
    let result= await ec_suppliers.create({full_name:full_name,e_mail:e_mail,password:password,profile_pic:profile_pic,purchased_sub_plan:subscription_plan})
    return res.status(200).send("Supplier registered");
    }
    
    catch(error:any){
        console.log(error);
        return res.status(404).send("failed to register supplier");
    }}
    else if(user_type=='superAdmin'){
        try{
            await ec_suppliers.create({full_name:full_name,e_mail:e_mail,password:password,profile_pic:profile_pic,registration_id:1,purchased_sub_plan:subscription_plan})
            return res.status(200).send("SuperAdmin registered");
           }
           
           catch(error:any){
               console.log(error);
               return res.status(404).send("failed to register superAdmin");
           }}
    else if(user_type=='customer'){
        customerRegister(req,res);
    }
    else{
        return res.status(404).send("INVALID user_type");
    }
        
    }
    
//     return res.status(200).json(`From the contact, name is ${full_name} with email ${e_mail} password is ${password} and profile pic is ${profile_pic}`);
// }
export default register;