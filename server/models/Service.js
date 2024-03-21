import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    photoService: {
        type: String,
        required: true
    },
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    price: {
        type: String,
        required: true
    }
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;