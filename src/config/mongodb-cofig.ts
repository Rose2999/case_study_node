import {config} from "dotenv";


config({path:"environments/.env"});
const mongoUrl=process.env.mongoUri??"";
// const mongoUri=`mongodb+srv://roseedacherry29:${encodeURIComponent('Edacherry123')}@cluster0.8d51ltu.mongodb.net/?retryWrites=true&w=majority`;

export default mongoUrl
