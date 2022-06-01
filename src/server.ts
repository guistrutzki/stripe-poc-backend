import express from "express"
import cors from "cors";
import morgan from 'morgan';
import { router } from "./router"

const app = express()

app.use(express.json());
app.use(cors())
app.use(morgan('dev'))
app.use(router)

app.listen(3000, () => console.log("Server is running 🚀 - Port 3000"))