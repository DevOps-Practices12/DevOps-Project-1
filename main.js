import express from "express";

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Your site is live on http://localhost:${PORT}`);
});
