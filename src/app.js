import express from "express"
import path from "path"
import cookieParser from "cookie-parser"
import logger from "morgan"
import indexRouter from "./routes/index"

const app = express()

app.use(logger("dev"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cookieParser())
app.use(express.static(path.join(__dirname, "../public")))

//Ignoring Favicon
app.get("/favicon.ico", (req, res) => res.status(204))

//Routes
app.use("/", indexRouter)

export default app
