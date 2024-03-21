import { IService } from "./IService";

export interface IApplication {
    _id: String,
    fio: String,
    description: String,
    phone: String,
    service: IService,
    date: String,
    status: String
}