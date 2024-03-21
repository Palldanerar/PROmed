import Application from "../models/Application.js"

export const getAllApplications = async (req, res) => {
    try {

        const applications = await Application.find().populate("service");

        res.status(201).json(applications);

    } catch (error) {
        console.error("Error Getting Applications: ", error);
        res.status(500).json({ message: "Ошибка при получении заявок!" });
    }
}

export const getApplicationById = async (req, res) => {
    try {

        const _id = req.params.applicationId

        const application = await Application.findOne({ _id }).populate("service");

        res.status(201).json(application);

    } catch (error) {
        console.error("Error Getting Application: ", error);
        res.status(500).json({ message: "Ошибка при получении заявки!" });
    }
}

export const createApplication = async (req, res) => {
    try {

        const { fio, description, phone, date, service } = req.body;

        const newApplication = new Application({
            fio,
            description,
            phone,
            date,
            service,
            status: "Новая"
        });

        await newApplication.save();

        res.status(201).json({ message: "Заявка успешно создана! Скоро мы с вами свяжемся." });

    } catch (error) {
        console.error("Error Creating Application: ", error);
        res.status(500).json({ message: "Ошибка при создании заявки!" });
    }
}

export const updateStatusApplication = async (req, res) => {
    try {
        const _id = req.params.applicationId;

        const { status } = req.body;

        await Application.updateOne({
            _id
        }, {
            status
        })

        res.status(201).json({ message: "Статус заявки успешно обновлен!" });

    } catch (error) {
        console.error("Error updating Application: ", error);
        res.status(500).json({ message: "Ошибка при обновлении статуса заявки!" });
    }

}

export const deleteApplication = async (req, res) => {
    try {
        const _id = req.params.applicationId;

        await Application.findOneAndDelete({
            _id
        })

        res.status(201).json({ message: "Заявка успешно удалена!" });
    } catch (error) {
        console.error("Error Deleting Application: ", error);
        res.status(500).json({ message: "Ошибка при удалении заявки!" });
    }
}