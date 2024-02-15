import { DataTypes, Sequelize } from 'sequelize';
import bcrypt from 'bcrypt'
import sequelize from '../config/sequelize-config'; // Import the Sequelize instance.
import ec_suppliers from '../../types/modelTypes/ec_suppliers'


ec_suppliers.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  e_mail:{
    type:DataTypes.STRING,
    allowNull: false,

  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
   
  },
  profile_pic:{
    type:DataTypes.STRING, 
    allowNull: false,
  },
  registration_id:{
    type:DataTypes.STRING,
    allowNull: true,
    defaultValue: ()=>{
        return Math.floor(100000+Math.random()*900000).toString();
    }
  },
  registration_time_stamp:{
    type:DataTypes.DATE,
    allowNull: false,
    defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  plan_id:{
   type:DataTypes.INTEGER,
   allowNull:true,
   unique:true,
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
  modelName:'ec_suppliers',
  tableName:'ec_suppliers',
  hooks: {
    beforeCreate:(user:ec_suppliers)=>{
      const hashedPassword=bcrypt.hashSync(user.password,bcrypt.genSaltSync(10));
      user.password=hashedPassword;
    }
  }
});

export default ec_suppliers ;
