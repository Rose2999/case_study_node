import  {Sequelize}  from "sequelize";
const sequelize = new Sequelize({
    database: 'case_study',
    username: 'root',
    password: 'experion@123',
    host: '127.0.0.1',
    dialect: 'mysql',
  });
  
  export default sequelize;