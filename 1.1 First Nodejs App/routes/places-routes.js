import express from "express";
import {
  getPlaceById,
  createPlace,
  updatePlaceById,
  deletePlaceById,
} from "../controllers/places-controllers.js";

const router = express.Router();

router.get("/:pid", getPlaceById);

router.post("/", createPlace);

router.patch("/:pid", updatePlaceById);

router.delete("/:pid", deletePlaceById);

export default router;
