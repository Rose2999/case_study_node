import { Model } from "sequelize";
class EcCustomerSupplierMapping extends Model{
    public ec_cs_id?:number;
    public customerId?:number;
    public supplierId?:number;
    public status?:string;
    
}

export default EcCustomerSupplierMapping;