import ec_customer from './ec_customers'
import ec_suppliers from './ec_suppliers'
import ec_Customer_Supplier_Mapping from './ec_customer_supplier_mapping'
import sub_plan from './sub_plan'
 
const associations = () => {
    ec_customer.hasMany(ec_Customer_Supplier_Mapping, {
        foreignKey: 'customer_id',
        sourceKey: 'id',
    })
   ec_Customer_Supplier_Mapping.belongsTo(ec_customer, {
        foreignKey: 'customer_id',
        targetKey: 'id',
    })
 
    ec_suppliers.hasMany(ec_Customer_Supplier_Mapping,{
        foreignKey: 'supplier_id',
        sourceKey: 'id',
    })
    ec_Customer_Supplier_Mapping.belongsTo(ec_suppliers,{
        foreignKey: 'supplier_id',
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