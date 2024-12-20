import express from 'express'
import cors from 'cors'
import { connectDB } from './Config/db.js';
import userRouter from './routes/userRoutes.js';
import 'dotenv/config'

const app = express();
app.use(cors())
app.use(express.json())

connectDB();

app.use("/api/user",userRouter)


app.listen(3001,()=> {console.log('server running successfully')})


