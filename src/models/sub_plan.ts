import { DataTypes, Sequelize } from 'sequelize';
import bcrypt from 'bcrypt'
import sequelize from '../config/sequelize-config'; // Import the Sequelize instance.
import sub_plan from '../../types/modelTypes/sub_plan';


sub_plan.init({
  sb_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  plan_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sub_fee:{
    type:DataTypes.INTEGER,
    allowNull: true,
    
  },
  no_of_customers: {
    type: DataTypes.INTEGER,
    allowNull: true,
   
  },
  
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt:{
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  }
 
},{
  sequelize,
  modelName:'sub_plan',
  tableName:'sub_plan',
  
});

export default sub_plan ;
