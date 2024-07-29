
import express from "express"
import { router } from "./src/routes/routes.js"
import cors from "cors"

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/tasks", router);

app.listen(process.env.PORT || 5000, () => {
    console.log("Start listening");
})