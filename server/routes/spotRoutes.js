import express from "express";
import { createSpot } from "../controllers/spotController.js";
import upload from "../middleware/uploadMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";
import { createSpot, getSpots, getOwnerSpots, toggleSpotsAvailability } from "../controllers/spotController.js";

const spotRouter = express.Router();

spotRouter.post("/", upload.array("images",1), protect, createSpot);
spotRouter.get("/", getSpots);
spotRouter.get("/owner", protect, getOwnerSpots);
spotRouter.post("/toggle-availability", protect, toggleSpotsAvailability);

export default spotRouter;