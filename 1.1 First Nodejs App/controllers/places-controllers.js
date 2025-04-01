import HttpError from "../models/http-errors.js";
import { v4 as uuidv4 } from "uuid";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;

  const place = DUMMY_PLACES.find((data) => {
    return data.id === placeId;
  });

  if (!place) {
    throw new HttpError("The item cann't be found", 404);
    // return res.status(404).json({ message: "Date not found" });
  }

  console.log("Get request in places", placeId);
  res.json({ place });
};

const createPlace = (req, res, next) => {
  const { title, description, coordiantes, address, creator } = req.body;

  const createdPlace = {
    id: uuidv4(),
    title,
    description,
    location: coordiantes,
    address,
    creator,
  };

  DUMMY_PLACES.push(createdPlace);

  res.status(201).json({ place: createdPlace });
};

const updatePlaceById = (req, res, next) => {
  const placeId = req.params.pid;
};

const deletePlaceById = (req, res, next) => {
  const placeId = req.params.pid;

  const placeIndex = DUMMY_PLACES.findIndex((item) => item.id === placeId);

  if (placeIndex === -1) {
    throw new HttpError("Place not found", 404);
    // Alternatively: return res.status(404).json({ message: "Place not found" });
  }

  DUMMY_PLACES.splice(placeIndex, 1);

  res.status(200).json({ message: "Place deleted successfully" });
};

export { getPlaceById, createPlace, updatePlaceById, deletePlaceById };
