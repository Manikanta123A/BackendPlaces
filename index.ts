import express from 'express'
import dotenv from 'dotenv'
import { Request } from 'express';
import { Response } from 'express';
import connectDb from './connectDb/connectDb';
import router from './routes/router'
import cors from 'cors'
dotenv.config();
const app = express();
const port = process.env.PORT || 5002;

app.use(express.json())
app.use(cors({ origin: "*", credentials: true }));

app.use("/location", router)
app.listen(port , ()=>{
    connectDb()
    console.log(`listenign to the port ${port}`);
})