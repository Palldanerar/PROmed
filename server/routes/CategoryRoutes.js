import express from "express"
import { createCategory, deleteCategory, getAllCategories } from "../controllers/CategoryController.js";

const router = express.Router()

router.get("/", getAllCategories)
router.post("/create", createCategory)
router.delete("/:categoryId", deleteCategory)

export default router;