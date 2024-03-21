import { ICategory } from "./ICategory";
import { IDoctor } from "./IDoctor";

export interface IService {
    _id: String,
    title: String,
    description: String,
    photoService: String,
    doctors: IDoctor[],
    category: ICategory,
    price: String,
}