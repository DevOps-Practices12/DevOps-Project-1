import { Router } from "express";
import { HomePage, ListOfFruit } from "../Controllers/controller.js";

const routes = Router();

routes.get("/", HomePage);

routes.get("/fruits", ListOfFruit);

export default routes;
