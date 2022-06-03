import 'dotenv/config'
import express from "express"
import "express-async-errors"
import cors from "cors";
import { router } from "./router"
import { morganLogging } from "./middlewares/logger";
import { errorMiddleware } from './middlewares/error';

const app = express()

app.use(express.json());
app.use(cors())

app.use(morganLogging)
app.use(router)

app.use(errorMiddleware)

app.listen(3000, () => console.log("Server is running 🚀 - Port 3000"))
