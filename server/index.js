import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import CategoryRoutes from "./routes/CategoryRoutes.js"
import UserRoutes from "./routes/UserRoutes.js"
import DoctorRoutes from "./routes/DoctorRoutes.js"
import ServiceRoutes from "./routes/ServiceRoutes.js"
import AplicationRoutes from "./routes/ApplicationRoutes.js"

mongoose.connect("mongodb://127.0.0.1:27017/promed")
    .then(() => {
        console.log("БАЗА ДАННЫХ ПОДКЛЮЧЕНА")
    })
    .catch((error) => {
        console.log(`БАЗА ДАННЫХ НЕ ПОДКЛЮЧЕНА. Ошибка: ${error}`)
    })

const app = express()

app.use(express.json());
app.use(cors())
app.use("/uploads", express.static('uploads'));
app.use("/categories", CategoryRoutes)
app.use("/users", UserRoutes)
app.use("/doctors", DoctorRoutes)
app.use("/services", ServiceRoutes)
app.use("/applications", AplicationRoutes)

app.listen(4801, () => {
    console.log("SERVER START")
})