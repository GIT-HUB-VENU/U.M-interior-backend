import express from "express"
import { showInteriors } from "../controllers/interiorstoreController.js";
const interiorstoreRouter = express.Router()

interiorstoreRouter.get("/", showInteriors)

export default interiorstoreRouter