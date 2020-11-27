import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";
//App Config
const app = express();
const PORT = process.env.PORT || 8000;
const connection_URL =
  "mongodb+srv://dbDevon:password!!!@tinder-clone.217xr.mongodb.net/tinder-clone?retryWrites=true&w=majority";

//Middlewares
app.use(express.json());
app.use(cors());

//DB config
mongoose.connect(connection_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedToplogy: true,
});

//API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//Listener
app.listen(PORT, () =>
  console.log(`I'm connected and listening on http://localhost:${PORT}`)
);
