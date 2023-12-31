import express from "express";
import dotenv from "dotenv";
import mysql2 from "mysql2";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;


//Routes import 
import sharkRoute from "./routes/sharkRoutes.js"
import perGameRoute from "./routes/perGameRoutes.js"
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(`${req.socket.remoteAddress} is requesting ${req.method}:${req.url}`);
    next();
});

// Root path
app.get('/', (req, res) => res.send("server is ready"));
app.use("/shark", sharkRoute)
app.use("/bet", perGameRoute)

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});