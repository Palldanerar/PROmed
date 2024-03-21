import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DoctorCard from '../components/DoctorCard'
import { IService } from '../interface/IService'
import axios from 'axios'
import { IDoctor } from '../interface/IDoctor'
import toast from 'react-hot-toast'

const Service = () => {


  const [service, setService] = useState<IService | null>(null)

  const [FIO, setFIO] = useState("Харин Альберт Иванович")
  const [description, setDescription] = useState("Заложенность носа, насморк, зуд в носу, чихание и покраснение глаз.")
  const [phone, setPhone] = useState("8907334568")

  const { id } = useParams()

  const getService = async () => {
    const response = await axios.get(`http://localhost:4801/services/${id}`)
    const data = response.data
    setService(data)
  }

  const newApplication = async () => {
    const response = await axios.post("http://localhost:4801/applications/create", {
      fio: FIO,
      phone,
      description,
      date: new Date(),
      service: service?._id,
    })

    if(response.status == 201) {
      return toast.success('Вы успешно записались!')
    }

    toast.error("Ошибка! Попробуйте снова.")
  }

  useEffect(() => {
    getService()
  }, [id])


  return (
    <div className='w-full block_screen'>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col gap-y-4">
          <h3 className="font-bold text-lg text-center">Записть на {service?.title}</h3>
          <input type="text" placeholder="ФИО" value={FIO} onChange={(e) => { setFIO(e.target.value) }} className="input input-bordered w-full" />
          <input type="text" placeholder="Номер телефона" value={phone} onChange={(e) => { setPhone(e.target.value) }} className="input input-bordered w-full" />
          <textarea className="textarea textarea-bordered" value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder="Описание"></textarea>
          <div className="modal-action">
            <form method="dialog" className='flex gap-x-3'>
              <button onClick={newApplication} className='btn btn-success'>Записаться</button>
              <button className="btn btn-error">Закрыть</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className='w-[1400px] block_screen mx-auto flex items-center'>
        <div className='w-1/2 h-full flex justify-center items-center'>
          <img className='w-[650px] h-auto rounded-lg' src={"http://localhost:4801/" + service?.photoService} />
        </div>
        <div className='w-1/2 h-full flex flex-col items-center justify-center gap-y-3 select-none'>
          <div>
            <h2 className='font-bold text-3xl'>{service?.title}</h2>
          </div>
          <div className='text-lg text-wrap text-justify flex flex-col gap-y-3'>
            <p>{service?.description}</p>
            <h2>Цена: {service?.price}₽</h2>
            <h2>Категория: {service?.category.title}</h2>
            {/* @ts-ignore */}
            <button onClick={() => document.getElementById('my_modal_1').showModal()} className='w-full p-2 bg-green-300 rounded-lg text-white text-xl'>
              Записаться
            </button>
          </div>
        </div>
      </div>
      <div className='w-[1400px] h-auto mx-auto'>
        <div>
          <h2 className='font-bold text-3xl text-center'>Специалисты</h2>
        </div>
        <div className='w-full flex gap-x-16 gap-y-2 flex-wrap mt-7'>
          {service?.doctors.length != 0 ? service?.doctors.map((doctor: IDoctor) => {
            return (
              <DoctorCard doctor={doctor} />
            )
          }) : <h2 className='w-full text-2xl text-center mx-2'>Увы, похоже нужных специалистов у нас нет(</h2>}
        </div>
      </div>
    </div>
  )
}

export default Service