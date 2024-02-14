import { DataTypes, Sequelize } from 'sequelize';
import bcrypt from 'bcrypt'
import sequelize from '../config/sequelize-config'; // Import the Sequelize instance.
import ec_customer from '../../types/modelTypes/ec_customers';;


ec_customer.init({
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
    unique:true,
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
  modelName:'ec_customers',
  tableName:'ec_customers',
  hooks: {
    beforeCreate:(user:ec_customer)=>{
      const hashedPassword=bcrypt.hashSync(user.password,bcrypt.genSaltSync(10));
      user.password=hashedPassword;
    }
  }
});

export default ec_customer ;
