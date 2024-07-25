import express from "express";

import * as controllers from "../controllers/controllers.js";

export const router = express.Router();

router.get("/posts", controllers.getAllPosts);
router.get("/posts/:id", controllers.getPost);
router.post("/posts", controllers.createPost);
router.put("/posts/:id", controllers.updatePost);
router.delete("/posts/:id", controllers.deletePost);