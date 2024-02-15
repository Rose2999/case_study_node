import ec_Customer_Supplier_Mapping from "../../types/modelTypes/ec_customer_supplier_mapping";
import { DataTypes, Sequelize } from 'sequelize';

import sequelize from '../config/sequelize-config'; 


ec_Customer_Supplier_Mapping.init({
    ec_cs_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    
    supplierId:{
      type:DataTypes.STRING,
      allowNull: true,
     
    },
    customerId:{
        type:DataTypes.STRING,
        allowNull: true,
       
      },
      planId:{
        type:DataTypes.STRING,
        allowNull:true
      },
      status:{
        type:DataTypes.STRING,
        allowNull:true,
        
      },},
      {
        sequelize,
        modelName:'ec_customer_supplier_mapping',
        tableName:'ec_customer_supplier_mapping',
      });
  
  export default ec_Customer_Supplier_Mapping  ;
  