import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'


//App config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

//Initialize middleware
app.use(express.json())
app.use(cors())

//Api endpoint
app.get("/",(req,res)=> res.send("API Working..."))

app.use("/api/user",userRouter)
app.use("/api/image",imageRouter)

app.listen(PORT, () =>{
    console.log(`Server run port number ${PORT}`);
    
})