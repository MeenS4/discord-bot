import express, { json } from "express";

const app = express();

app.use(json());

app.get("/", (req, res) => res.send("Hello world!"));

app.listen(3001, () => {
  console.log("server running on port " + 3001);
});
