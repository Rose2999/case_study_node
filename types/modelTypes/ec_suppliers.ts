import { Model } from "sequelize";
class EcSuppliers extends Model{
    public id?:number;
    public full_name!:string;
    public e_mail!:string;
    public password!:string;
    public profile_pic!:Buffer |null;
    public registration_id?:string;
    public registration_time_stamp?:string;
    public plan_id?:number;
    public createdAt?:Date;
    public updatedAt?:Date;
}

export default EcSuppliers;