import express from "express"
import cors from "cors"

const app = express();

app.use("/", express.json());
app.use(cors());

app.get("/api/hello", (req, res) => {
    res.send("Hello From Express!");
})

app.post("/api/world", (req, res) => {
    console.log(req.body.message);
    const resp = "I recieved your POST request. This is what you sent me: " + req.body.message;
    res.send(resp);
})

const PORT = 5566;

app.listen(PORT, () => console.log("listening on " + PORT));
