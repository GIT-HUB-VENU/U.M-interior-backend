import {
    getinteriors,
    addInteriorForm,
    addInterior,
    deleteInterior,
    editInteriorForm,
    saveInterior,
} from "../controllers/interiorController.js";
import express from "express";
const interiorRouter = express.Router();

interiorRouter.get("/", getinteriors);
interiorRouter.get("/add", addInteriorForm);
interiorRouter.post("/add", addInterior);
interiorRouter.get("/:id/delete", deleteInterior);
interiorRouter.get("/:id/edit", editInteriorForm);
interiorRouter.post("/:id/save", saveInterior);

export default interiorRouter;