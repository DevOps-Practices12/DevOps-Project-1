import express from "express";
import cors from "cors";
import routes from "./Routes/routes.js";

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.set("views", "Templates");
app.set("view engine", "ejs");

app.use(routes);

app.listen(PORT, () => {
  console.log(`Your site is live on http://localhost:${PORT}`);
});
