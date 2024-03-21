import Category from "../models/Category.js";

export const createCategory = async (req, res) => {
    try {

        const { title } = req.body;

        const newCategory = new Category({
            title,
        });

        await newCategory.save();

        res.status(201).json({ message: "Категория успешно создана!", newCategory });

    } catch (error) {
        console.error("Error Creating Category: ", error);
        res.status(500).json({ message: "Ошибка при создании категории!" });
    }
}

export const getAllCategories = async (req, res) => {
    try {

        const categories = await Category.find();

        res.status(201).json(categories);

    } catch (error) {
        console.error("Error Getting Category: ", error);
        res.status(500).json({ message: "Ошибка при получении категорий!" });
    }
}

export const deleteCategory = async (req, res) => {
    try {

        const _id = req.params.categoryId;

        console.log(_id)

        await Category.findOneAndDelete({
            _id
        })

        res.status(201).json({ message: "Услуга успешно удалена!" });

    } catch (error) {
        console.error("Error Deleting Category: ", error);
        res.status(500).json({ message: "Ошибка при удалении категории!" });
    }
}