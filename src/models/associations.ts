import ec_customer from './ec_customers'
import ec_suppliers from './ec_suppliers'
import ec_Customer_Supplier_Mapping from './ec_customer_supplier_mapping'
 
const associations = () => {
    ec_customer.hasMany(ec_Customer_Supplier_Mapping, {
        foreignKey: 'customer_id',
        sourceKey: 'registration_id',
    })
   ec_Customer_Supplier_Mapping.belongsTo(ec_customer, {
        foreignKey: 'customer_id',
        targetKey: 'registration_id',
    })
 
    ec_suppliers.hasMany(ec_Customer_Supplier_Mapping,{
        foreignKey: 'supplier_id',
        sourceKey: 'registration_id',
    })
    ec_Customer_Supplier_Mapping.belongsTo(ec_suppliers,{
        foreignKey: 'supplier_id',
        targetKey: 'registration_id',
    })
}
 
export default associations