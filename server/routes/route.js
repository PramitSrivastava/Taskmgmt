import express from "express";
import {
  getUsers,
  addUser,
  getUser,
  editUser,
  deleteUser,
} from "../controller/user-controller.js";
// import { editUser } from '../../client/src/service/api.js';

const router = express.Router();

router.get("/all", getUsers);
router.post("/add", addUser);
router.get("/:id", getUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

export default router;
