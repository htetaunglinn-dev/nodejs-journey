import express from "express";
import bodyParser from "body-parser";
import HttpError from "./models/http-errors.js";

import placesRoutes from "./routes/places-routes.js";
import usersRoutes from "./routes/users-routes.js";

const app = express();

app.use(bodyParser.json());

app.use("/api/places/", placesRoutes);
app.use("/api/users/", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Couldnt find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (req.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "unknown error" });
});

app.use(express.urlencoded({ extended: true }));

app.listen(4000);
