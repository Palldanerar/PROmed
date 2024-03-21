import mongoose from "mongoose";

const doctroSchema = new mongoose.Schema({
    fio: {
        type: String,
        required: true,
    },
    speciality: {
        type: String,
        required: true,
    },
    photoDoctor: {
        type: String,
        required: true,
    }
});

const Doctor = mongoose.model('Doctor', doctroSchema);

export default Doctor;