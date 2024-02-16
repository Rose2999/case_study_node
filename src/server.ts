import express, { Express } from 'express';
import sequelize from "./config/sequelize-config";
import cardRoutes from "./routes/cardRoutes"
const app: Express = express();
const PORT = 3000;



sequelize.sync({ force: false})
    .then(() => {
        
        console.log("database synced");
    })
    .catch((error) => {
        console.log("error in syncing database", error);
    });

app.use(express.json());

// Define routes with correct route paths
app.use('/api/v1', cardRoutes); // Prefix routes with '/api/v1'



app.listen(PORT, () => {
    console.log("listening");
});