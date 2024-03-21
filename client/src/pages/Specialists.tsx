import React, { useState } from 'react'
import { IDoctor } from '../interface/IDoctor'
import DoctorCard from '../components/DoctorCard'

interface SpecialistsProps {
  doctors: IDoctor[]
}

const Specialists = ({ doctors }: SpecialistsProps) => {

  const [filter, setFilter] = useState("")
  const [search, setSearch] = useState("")

  const filterSpecialists = () => {

    if (!filter) {
      return doctors
    }

    return doctors.filter((doctor: IDoctor) => doctor.speciality == filter)

  }

  const searchSpecialists = () => {
    if (!search) {
      return filterSpecialists()
    }

    return filterSpecialists().filter((doctor: IDoctor) => doctor.fio.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  }

  return (
    <div className='w-full'>
      <div className='w-[1200px] h-auto mx-auto flex justify-between my-7'>
        <input value={search} onChange={(e) => {setSearch(e.target.value)}} type="text" placeholder="Поиск по имени" className="input input-bordered w-full max-w-xs" />
        <select onChange={e => {setFilter(e.target.value)}} className="select select-bordered w-full max-w-xs">
          <option disabled selected>Поиск по специалности</option>
          <option value="Хирург">Хирург</option>
          <option className='Терапевт'>Терапевт</option>
          <option value="Травматолог">Травматолог</option>
          <option value="Психиатр">Психиатр</option>
        </select>
      </div>
      <div className='w-[1400px] h-auto mx-auto'>
        <div>
          <h2 className='font-bold text-3xl text-center'>Наши специалисты</h2>
        </div>
        <div className='w-full flex justify-center flex-wrap gap-3 mt-7'>
          {searchSpecialists().map((doctor: IDoctor) => {
            return (
              <DoctorCard doctor={doctor} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Specialists