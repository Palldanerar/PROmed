import React, { useState } from 'react'
import { IDoctor } from '../interface/IDoctor'
import { IApplication } from '../interface/IApplication'
import axios from 'axios'
import toast from 'react-hot-toast'
import { ICategory } from '../interface/ICategory'
import { IService } from '../interface/IService'

interface AdminProps {
  doctors: IDoctor[],
  applacations: IApplication[],
  categories: ICategory[],
  services: IService[],
}

const Admin = ({ doctors, applacations, categories, services }: AdminProps) => {

  console.log(applacations)

  const [showApplications, setShowApplications] = useState(true)
  const [showDoctors, setShowDoctors] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const [showCategory, setShowCategory] = useState(false)

  const [updateId, setUpdateId] = useState("")
  const [updateTitle, setUpdateTitle] = useState("")
  const [updateDescription, setUpdateDescription] = useState("")
  const [updateCategory, setUpdateCategory] = useState("")
  const [updatePrice, setUpdatePrice] = useState("")
  const [updatePhotoService, setUpdatePhotoService] = useState(null)

  const [newDoctorFio, setNewDoctorFio] = useState("")
  const [newDoctorSpeciality, setNewDoctorSpeciality] = useState("")
  const [newPhotoDoctor, setNewPhotoDoctor] = useState(null)

  const [newServiceTitle, setNewServiceTitle] = useState("")
  const [newServiceDescription, setNewServiceDescription] = useState("")
  const [newServiceCategory, setNewServiceCategory] = useState("")
  const [newServicePrice, setNewServicePrice] = useState("")
  const [newServicePhoto, setNewServicePhoto] = useState("")

  const [newCategoryTitle, setNewCategoryTitle] = useState("")

  const openApplications = () => {
    setShowApplications(true)
    setShowDoctors(false)
    setShowServices(false)
    setShowCategory(false)
  }

  const openDoctors = () => {
    setShowApplications(false)
    setShowDoctors(true)
    setShowServices(false)
    setShowCategory(false)
  }

  const openServices = () => {
    setShowApplications(false)
    setShowDoctors(false)
    setShowServices(true)
    setShowCategory(false)
  }

  const openCategory = () => {
    setShowApplications(false)
    setShowDoctors(false)
    setShowServices(false)
    setShowCategory(true)
  }

  const updateStatus = async (e: any, id: String) => {
    const response = await axios.put(`http://localhost:4801/applications/${id}`, {
      status: e.target.value
    })

    if (response.status == 201) {
      return toast.success("Статус успешно обновлен!")
    }

    toast.error("Ошибка! Попробуйте снова.")
  }

  const deleteDoctor = async (id: String) => {

    const response = await axios.delete(`http://localhost:4801/doctors/${id}`)

    if (response.status == 201) {
      return toast.success("Доктор успешно удалён!")
    }

    toast.error("Ошибка! Попробуйте снова.")
  }

  const deleteCategory = async (id: String) => {

    const response = await axios.delete(`http://localhost:4801/categories/${id}`)

    if (response.status == 201) {
      return toast.success("Категория успешно удалёна!")
    }

    toast.error("Ошибка! Попробуйте снова.")
  }

  const updateService = async () => {

    console.log(updateId)

    const updateForm = new FormData()

    updateForm.append("title", updateTitle)
    updateForm.append("description", updateDescription)
    updateForm.append("category", updateCategory)
    updateForm.append("price", updatePrice)
    // @ts-ignore
    updateForm.append("photoService", updatePhotoService)

    const response = await axios.put(`http://localhost:4801/services/${updateId}`, updateForm)

    if (response.status == 201) {
      return toast.success("Данные успешно обновлены!")
    }

    toast.error("Ошибка! Попробуйте снова.")
  }

  const createNewDoctor = async () => {
    const form = new FormData()

    form.append("fio", newDoctorFio)
    form.append("speciality", newDoctorSpeciality)
    // @ts-ignore
    form.append("photoDoctor", newPhotoDoctor)

    const response = await axios.post(`http://localhost:4801/doctors/create`, form)

    if (response.status == 201) {
      return toast.success("Доктор успешно добавлен!")
    }

    toast.error("Ошибка! Попробуйте снова.")
  }

  const createNewService = async () => {

    const form = new FormData()

    form.append("title", newServiceTitle)
    form.append("description", newServiceDescription)
    form.append("category", newServiceCategory)
    form.append("price", newServicePrice)
    form.append("photoService", newServicePhoto)

    const response = await axios.post(`http://localhost:4801/services/create`, form)

    if (response.status == 201) {
      return toast.success("Услуга успешно добавлена!")
    }

    toast.error("Ошибка! Попробуйте снова.")
  }

  const deleteService = async (id: String) => {
    const response = await axios.delete(`http://localhost:4801/services/${id}`)

    if (response.status == 201) {
      return toast.success("Услуга успешно удалён!")
    }

    toast.error("Ошибка! Попробуйте снова.")
  }

  const addDoctorToService = async (serviceId: String, doctorId: String) => {
    const response = await axios.put(`http://localhost:4801/services/doctor/${serviceId}`, {
      doctorId
    })

    if (response.status == 201) {
      return toast.success("Доктор успешно приклеплён!")
    }

    toast.error("Ошибка! Попробуйте снова.")
  }

  const createNewCategory = async () => {
    const response = await axios.post(`http://localhost:4801/categories/create`, {
      title: newCategoryTitle
    })

    if (response.status == 201) {
      return toast.success("Категория успешно создана!")
    }

    toast.error("Ошибка! Попробуйте снова.")
  }

  return (
    <div className='w-full mx-auto'>
      <div className='w-[1400px] mx-auto flex justify-between p-2'>
        <button onClick={openApplications} className='btn btn-info'>Заявки</button>
        <button onClick={openDoctors} className='btn btn-info'>Доктора</button>
        <button onClick={openServices} className='btn btn-info'>Услуги</button>
        <button onClick={openCategory} className='btn btn-info'>Категории</button>
      </div>

      {showApplications &&
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>ФИО</th>
                <th>Номер телефона</th>
                <th>Описание</th>
                <th>Дата</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              {applacations.map((applacation: IApplication) => (
                <tr>
                  <th>{applacation.fio}</th>
                  <td>{applacation.phone}</td>
                  <td>{applacation.description}</td>
                  <td>{applacation.date}</td>
                  <td>
                    <select onChange={(e) => { updateStatus(e, applacation._id) }} className="select select-bordered w-full">
                      <option disabled selected>{applacation.status}</option>
                      <option value="В обработке">В обработке</option>
                      <option value="Обследование">Обследование</option>
                      <option value="Завершен">Завершен</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }

      {showDoctors &&
        <div className="overflow-x-auto">

          <dialog id="doctor" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-centeк">Добавление нового доктора</h3>

              <div className="modal-action flex flex-col gap-y-4">
                { /* @ts-ignore */}
                <input type="file" name='doctorPhoto' onChange={(e) => { setNewPhotoDoctor(e.target.files[0]) }} className="file-input w-full max-w-xs" />
                <input type="text" placeholder="ФИО" value={newDoctorFio} onChange={(e) => { setNewDoctorFio(e.target.value) }} className="input input-bordered w-full" />
                <input type="text" placeholder="Специальность" value={newDoctorSpeciality} onChange={(e) => { setNewDoctorSpeciality(e.target.value) }} className="input input-bordered w-full" />
                <form method="dialog">
                  <button onClick={createNewDoctor} className="btn btn-success">Добавить</button>
                  <button className="btn btn-error">Закрыть</button>
                </form>
              </div>
            </div>
          </dialog>

          <div className='flex justify-end p-2'>
            {/* @ts-ignore */}
            <button onClick={() => document.getElementById('doctor').showModal()} className='btn btn-success'>Добавить нового</button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Фото</th>
                <th>ФИО</th>
                <th>Специальность</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor: IDoctor) => (
                <tr>
                  <th>
                    <div className="w-24 rounded">
                      <img src={"http://localhost:4801/" + doctor.photoDoctor} />
                    </div>
                  </th>
                  <td>{doctor.fio}</td>
                  <td>{doctor.speciality}</td>
                  <td className='flex gap-x-4'>
                    <button onClick={() => { deleteDoctor(doctor._id) }} className='btn btn-error'>Удалить</button>
                    <select onChange={(e) => { addDoctorToService(e.target.value, doctor._id) }} className="select select-bordered w-full">
                      <option disabled selected>Выберете услугу</option>
                      {services.map((service: IService) => (
                        // @ts-ignore
                        <option value={service._id}>{service.title}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }

      {showServices &&
        <div className="overflow-x-auto">

          <dialog id="service" className="modal">
            <div className="modal-box flex flex-col gap-y-4">
              <h3 className="font-bold text-lg text-center">Редактировать {updateTitle}</h3>
              <h3 className="font-bold text-lg">Изображение</h3>
              {/* @ts-ignore */}
              <input type="file" name='[hotoService' onChange={(e) => { setUpdatePhotoService(e.target.files[0]) }} className="file-input w-full max-w-xs" />
              <input type="text" placeholder="Название" value={updateTitle} onChange={(e) => { setUpdateTitle(e.target.value) }} className="input input-bordered w-full" />
              <textarea className="textarea textarea-bordered h-40" value={updateDescription} onChange={(e) => { setUpdateDescription(e.target.value) }} placeholder="Описание"></textarea>
              <select onChange={(e) => { setUpdateCategory(e.target.value) }} className="select select-bordered w-full">
                <option disabled selected>{updateCategory}</option>
                {categories.map((category: ICategory) => (
                  // @ts-ignore
                  <option value={category._id}>{category.title}</option>
                ))}
              </select>
              <input type="text" placeholder="Цена" value={updatePrice} onChange={(e) => { setUpdatePrice(e.target.value) }} className="input input-bordered w-full" />
              <div className="modal-action">
                <form method="dialog">
                  <button onClick={updateService} className='btn btn-success'>Обновить</button>
                  <button className="btn btn-error">Закрыть</button>
                </form>
              </div>
            </div>
          </dialog>

          <dialog id="create-service" className="modal">
            <div className="modal-box flex flex-col gap-y-4">
              <h3 className="font-bold text-lg text-center">Создать новую услугу</h3>
              <h3 className="font-bold text-lg">Изображение</h3>
              {/* @ts-ignore */}
              <input type="file" name='photoService' onChange={(e) => { setNewServicePhoto(e.target.files[0]) }} className="file-input w-full max-w-xs" />
              <input type="text" placeholder="Название" value={newServiceTitle} onChange={(e) => { setNewServiceTitle(e.target.value) }} className="input input-bordered w-full" />
              <textarea className="textarea textarea-bordered h-40" value={newServiceDescription} onChange={(e) => { setNewServiceDescription(e.target.value) }} placeholder="Описание"></textarea>
              <select onChange={(e) => { setNewServiceCategory(e.target.value) }} className="select select-bordered w-full">
                <option disabled selected>Выберете категорию</option>
                {categories.map((category: ICategory) => (
                  // @ts-ignore
                  <option value={category._id}>{category.title}</option>
                ))}
              </select>
              <input type="text" placeholder="Цена" value={newServicePrice} onChange={(e) => { setNewServicePrice(e.target.value) }} className="input input-bordered w-full" />
              <div className="modal-action">
                <form method="dialog">
                  <button onClick={createNewService} className='btn btn-success'>Обновить</button>
                  <button className="btn btn-error">Закрыть</button>
                </form>
              </div>
            </div>
          </dialog>

          <div className='flex justify-end p-2'>
            {/* @ts-ignore */}
            <button onClick={() => document.getElementById('create-service').showModal()} className='btn btn-success'>Добавить нового</button>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Фото</th>
                <th>Название</th>
                <th>Описание</th>
                <th>Категория</th>
                <th>Цена</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service: IService) => (
                <tr>
                  <th>
                    <div className="w-24 rounded">
                      <img src={"http://localhost:4801/" + service.photoService} />
                    </div>
                  </th>
                  <td>{service.title}</td>
                  <td>{service.description}</td>
                  <td>{service.category.title}</td>
                  <td>{service.price}</td>
                  <td className='flex gap-x-2'>
                    {/* @ts-ignore */}
                    <button onClick={() => { document.getElementById('service').showModal(), setUpdateTitle(service.title), setUpdateDescription(service.description), setUpdateCategory(service.category.title), setUpdatePrice(service.price), setUpdateId(service._id) }} className='btn btn-success'>Редактировать</button>
                    <button onClick={() => { deleteService(service._id) }} className='btn btn-error'>Удалить</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }

      {showCategory &&
        <div className="overflow-x-auto">

          <dialog id="category" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-centeк">Добавление новую категорию</h3>

              <div className="modal-action flex flex-col gap-y-4">
                { /* @ts-ignore */}
                <input type="text" placeholder="название" value={newCategoryTitle} onChange={(e) => { setNewCategoryTitle(e.target.value) }} className="input input-bordered w-full" />
                <form method="dialog">
                  <button onClick={createNewCategory} className="btn btn-success">Добавить</button>
                  <button className="btn btn-error">Закрыть</button>
                </form>
              </div>
            </div>
          </dialog>

          <div className='flex justify-end p-2'>
            {/* @ts-ignore */}
            <button onClick={() => document.getElementById('category').showModal()} className='btn btn-success'>Добавить новуб</button>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Название</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category: ICategory) => (
                <tr>
                  <th>
                    {category.title}
                  </th>
                  <td>
                    <button onClick={() => { deleteCategory(category._id) }} className='btn btn-error'>Удалить</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

export default Admin