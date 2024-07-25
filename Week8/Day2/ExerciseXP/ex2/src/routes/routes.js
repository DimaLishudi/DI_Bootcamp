import express from "express";

import * as controllers from "../controllers/controllers.js";

export const router = express.Router();

router.get("/books", controllers.getAllBooks);
router.get("/books/:id", controllers.getBook);
router.post("/books", controllers.addBook);