import express from "express"
import { upload } from "../utils/upload.js";
import { createDoctor, deleteDoctor, getAllDoctrors } from "../controllers/DoctorController.js";

const router = express.Router()

router.get("/", getAllDoctrors)
router.post("/create", upload.single("photoDoctor"), createDoctor)
router.delete("/:doctorId", deleteDoctor)

export default router;