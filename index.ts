import express from 'express'
import dotenv from 'dotenv'
import { Request } from 'express';
import { Response } from 'express';
import connectDb from './connectDb/connectDb';
import router from './routes/router'
import cors from 'cors'
import { getAllFood } from './controller/foodController';
dotenv.config();
const app = express();
const port = process.env.PORT || 5002;

app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:5173", // Set frontend URL explicitly
    credentials: true, // Allow credentials (cookies, headers)
  })
);

app.use("/location", router);
app.get("/food",getAllFood);
app.listen(port , ()=>{
    connectDb()
    console.log(`listenign to the port ${port}`);
})
