import Service from "../models/Service.js"
import Doctor from "../models/Doctor.js"

export const getAllServices = async (req, res) => {
    try {

        const services = await Service.find().populate("doctors").populate("category");

        res.status(201).json(services);

    } catch (error) {
        console.error("Error Getting Services: ", error);
        res.status(500).json({ message: "Ошибка при получении услуг!" });
    }
}

export const getServiceById = async (req, res) => {
    try {

        const _id = req.params.serviceId

        const service = await Service.findOne({ _id }).populate("doctors").populate("category");

        res.status(201).json(service);

    } catch (error) {
        console.error("Error Getting Service: ", error);
        res.status(500).json({ message: "Ошибка при получении услуги!" });
    }
}

export const createService = async (req, res) => {
    try {

        console.log(req.body)

        const { title, description, category, price } = req.body;

        const photoService = req.file.path;

        const newService = new Service({
            title,
            description,
            category,
            price,
            photoService
        });

        await newService.save();

        res.status(201).json({ message: "Новая услуга успешно добавлена!" });

    } catch (error) {
        console.error("Error Creating Doctor: ", error);
        res.status(500).json({ message: "Ошибка при добавлении услуги!" });
    }
}

export const updateService = async (req, res) => {
    try {

        const _id = req.params.serviceId

        const { title, description, category, price } = req.body;

        const photoService = req.file.path;

        await Service.updateOne({
            _id
        }, {
            title,
            description,
            category,
            price,
            photoService,
        })

        res.status(201).json({ message: "Услуга успешно обновлена!" });

    } catch (error) {
        console.error("Error Creating Doctor: ", error);
        res.status(500).json({ message: "Ошибка при обновлении услуги!" });
    }
}

export const addDoctorInService = async (req, res) => {
    try {

        const _id = req.params.serviceId

        const { doctorId } = req.body;

        const service = await Service.findOne({ _id })
        const doctor = await Doctor.findOne({ _id: doctorId })

        service.doctors.push(doctor)
        await service.save();


        res.status(201).json({ message: "Специалист преклиплён к услуги!" });

    } catch (error) {
        console.error("Error Creating Doctor: ", error);
        res.status(500).json({ message: "Ошибка при обновлении услуги!" });
    }
}

export const deleteService = async (req, res) => {
    try {

        const _id = req.params.serviceId

        await Service.findOneAndDelete({
            _id
        })

        res.status(201).json({ message: "Услуга успешно удалена!" });

    } catch (error) {
        console.error("Error Deleting Doctor: ", error);
        res.status(500).json({ message: "Ошибка при удалении услуги!" });
    }
}