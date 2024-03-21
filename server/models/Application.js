import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    fio: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const Application = mongoose.model('Application', applicationSchema);

export default Application;