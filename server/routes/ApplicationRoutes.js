import express from "express"
import { createApplication, deleteApplication, getAllApplications, getApplicationById, updateStatusApplication } from "../controllers/ApplicationController.js"

const router = express.Router()

router.get("/", getAllApplications)
router.get("/:applicationId", getApplicationById)
router.post("/create", createApplication)
router.put("/:applicationId", updateStatusApplication)
router.delete("/:applicationId", deleteApplication)

export default router;