import express from "express";
import {
    getinteriors,       // HTML page
    addInterior,
    addInteriorForm,
    deleteInterior,
    editInteriorForm,
    saveInterior,
    getInteriorsJSON    // JSON API
} from "../controllers/interiorController.js";

const router = express.Router();

// HTML routes (require authenticateAdmin)
router.get("/", getinteriors);
router.get("/add", addInteriorForm);
router.post("/add", addInterior);
router.get("/:id/edit", editInteriorForm);
router.post("/:id/edit", saveInterior);
router.post("/interiors/:id/save", saveInterior);
router.get("/:id/delete", deleteInterior);

// JSON API route inside same router
router.get("/json", getInteriorsJSON); // <--- this is key

export default router;