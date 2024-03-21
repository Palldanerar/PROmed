import express from "express"
import { upload } from "../utils/upload.js";
import { addDoctorInService, createService, deleteService, getAllServices, getServiceById, updateService } from "../controllers/ServiceController.js";

const router = express.Router()

router.get("/", getAllServices)
router.get("/:serviceId", getServiceById)
router.post("/create", upload.single("photoService"), createService)
router.put("/doctor/:serviceId", addDoctorInService)
router.put("/:serviceId", upload.single("photoService"), updateService)
router.delete("/:serviceId", deleteService)

export default router;