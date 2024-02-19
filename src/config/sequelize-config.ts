import  {Sequelize}  from "sequelize";
const sequelize = new Sequelize({
    database: 'case_study',
    username: 'root',
    password: 'Rose@123',
    host: 'ec2-52-64-81-194.ap-southeast-2.compute.amazonaws.com',
    dialect: 'mysql',
  });
  
  export default sequelize;