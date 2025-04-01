import HttpError from "../models/http-errors.js";
import { v4 as uuidv4 } from "uuid";

const DUMMY_USERS = [
  {
    id: "u1",
    userName: "David",
    email: "linndavid@gmail.com",
  },
];

const getUsers = (req, res, next) => {
  res.status(200).json({ data: DUMMY_USERS });
};

const createUser = (req, res, next) => {
  console.log("body", req.body);
  const { name, email } = req.body;

  DUMMY_USERS.push({ id: uuidv4(), userName: name, email });

  res.status(200).json({ data: DUMMY_USERS });
};

export { getUsers, createUser };
