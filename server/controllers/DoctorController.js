import Doctor from "../models/Doctor.js"

export const getAllDoctrors = async (req, res) => {
    try {

        const doctors = await Doctor.find();

        res.status(201).json(doctors);

    } catch (error) {
        console.error("Error Getting Doctors: ", error);
        res.status(500).json({ message: "Ошибка при получении специалистов!" });
    }
}

export const createDoctor = async (req, res) => {
    try {

        const { fio, speciality } = req.body;

        console.log(req.file)

        const photoDoctor = req.file.path;

        const newDoctor = new Doctor({
            fio,
            speciality,
            photoDoctor
        });

        await newDoctor.save();

        res.status(201).json({ message: "Новый специалист успешно добавлен!", newDoctor});

    } catch (error) {
        console.error("Error Creating Doctor: ", error);
        res.status(500).json({ message: "Ошибка при создании специлиста!" });
    }
}

export const deleteDoctor = async (req, res) => {
    try {

        const _id = req.params.doctorId;

        await Doctor.findOneAndDelete({
            _id
        })

        res.status(201).json({ message: "Доктор успешно удалена!" });

    } catch (error) {
        console.error("Error Deleting Category: ", error);
        res.status(500).json({ message: "Ошибка при удалении доктора!" });
    }
}