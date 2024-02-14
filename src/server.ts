import express, { Express } from 'express';
import cors from 'cors';
import sequelize from "./config/sequelize-config";
import indexRoutes from "./routes/index";
import subplanRoutes from "./routes/subPlanRoutes";
import supplierRoutes from "./routes/supplierRoutes";
import customerRoutes from "./routes/customerRoutes";
import associations from './models/associations';
import{ connectToMongoDb,stopMongoDb} from "./services/mongodb"
import productRoutes from "./routes/productRoutes"
const app: Express = express();
const PORT = 3000;
const corsOptions={
    origin:"http://localhost:8080",
    methods:"GET",
};

associations();
sequelize.sync({ force: false })
    .then(() => {
        
        console.log("database synced");
    })
    .catch((error) => {
        console.log("error in syncing database", error);
    });
app.use(cors(corsOptions))
app.use(express.json()); 

// Define routes with correct route paths
app.use('/api/v1', indexRoutes); // Prefix routes with '/api/v1'
app.use('/api/v2', subplanRoutes);
app.use('/api/v3',supplierRoutes);
app.use('/api/v4',customerRoutes);
app.use('/api/v5/',productRoutes)

connectToMongoDb();
app.listen(PORT, () => {
    console.log("listening");
});
process.on('SIGINT',()=>{
    sequelize.close();
    stopMongoDb;
    process.exit();
});
process.on('exit',()=>{
    sequelize.close();
    stopMongoDb;
})