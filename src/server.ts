import express from "express"
import cors from "cors";
import { router } from "./router"
import { morganLogging } from "./middlewares/logger";

const app = express()

app.use(express.json());
app.use(cors())

app.use(morganLogging)
app.use(router)

app.listen(3000, () => console.log("Server is running 🚀 - Port 3000"))
