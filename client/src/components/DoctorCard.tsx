import React from 'react'
import { IDoctor } from '../interface/IDoctor'

interface DoctorCardProps {
  doctor: IDoctor
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={"http://localhost:4801/" + doctor.photoDoctor} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{doctor.fio}</h2>
        <p>{doctor.speciality}</p>
      </div>
    </div>
  )
}

export default DoctorCard