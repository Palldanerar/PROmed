import User from "../models/User.js";

export const login = async (req, res) => {
    try {

        const { login, password } = req.body;

        console.log(login)

        const user = await User.findOne({ login });

        if (!user) {
            return res.status(401).json({ message: "Неверный логин или пароль!" });
        }

        if (!user.password == password) {
            return res.status(401).json({ message: "Неверный логин или пароль!" });
        }

        res.status(201).json({ message: "Вы успешно авторизовались!", user });

    } catch (error) {
        console.error("Error Getting User: ", error);
        res.status(500).json({ message: "Ошибка при авторизации!" });
    }
}

export const register = async (req, res) => {
    try {

        const { login, password } = req.body;

        const existingUser = await User.findOne({ login });

        if (existingUser) {
            return res.status(400).json({ message: "Данный пользователь уже существует!" });
        }

        const newUser = new User({
            login,
            password
        });

        await newUser.save();
        res.status(201).json({ message: "Вы успешно зарегистрировались", user: newUser });

    } catch (error) {
        console.error("Error registering user: ", error);
        res.status(500).json({ message: "Registration failed" });
    };
}