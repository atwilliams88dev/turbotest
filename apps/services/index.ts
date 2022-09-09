import express from "express";
const PORT = 8000;

const app = express();

app.get("/", async (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => console.log("app up and running on " + PORT));
