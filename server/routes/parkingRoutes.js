import express from "express";
import { protect } from "../middleware/authMiddleware";
import { registerParking } from "../controllers/parkingController";

const parkingRouter = express.Router();

parkingRouter.post('/', protect, registerParking);

export default parkingRouter;