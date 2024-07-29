import express from "express";

import * as controllers from "../controllers/users.js";

export const router = express.Router();

router.get("/", controllers.getAllUsers);
router.get("/:id", controllers.getUser);
router.put("/:id", controllers.updateUser);