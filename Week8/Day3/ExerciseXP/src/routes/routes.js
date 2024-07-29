import express from "express";

import * as controllers from "../controllers/controllers.js";

export const router = express.Router();

router.get("/",       controllers.getAllTasks);
router.get("/:id",    controllers.getTask);
router.post("/",      controllers.addTask);
router.put("/:id",    controllers.updateTask);
router.delete("/:id", controllers.deleteTask);