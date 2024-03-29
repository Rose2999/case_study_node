import ec_customer from './ec_customers'
import ec_suppliers from './ec_suppliers'
import ec_Customer_Supplier_Mapping from './ec_customer_supplier_mapping'
import sub_plan from './sub_plan'
 
const associations = () => {
    ec_customer.hasMany(ec_Customer_Supplier_Mapping, {
        foreignKey: 'customerId',
        sourceKey: 'id',
    })
   ec_Customer_Supplier_Mapping.belongsTo(ec_customer, {
        foreignKey: 'customerId',
        targetKey: 'id',
    })
 
    ec_suppliers.hasMany(ec_Customer_Supplier_Mapping,{
        foreignKey: 'supplierId',
        sourceKey: 'id',
    })
    ec_Customer_Supplier_Mapping.belongsTo(ec_suppliers,{
        foreignKey: 'supplierId',
        targetKey: 'id',
    })
    sub_plan.hasMany(ec_suppliers,{
        foreignKey:'plan_id',
        sourceKey:'sb_id',
    })  
    ec_suppliers.belongsTo(sub_plan,{
        foreignKey:'plan_id',
        targetKey:'sb_id',
    })  
}
 
export default associations