import React, { useEffect, useRef, useState } from 'react'
import { FaClinicMedical } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { IService } from '../interface/IService'

interface HeaderProps {
  services: IService[]
}

const Header = ({ services }: HeaderProps) => {

  const [isOpen, setIsOpen] = useState(false)
  const dropRef = useRef(null)

  const handleClick = (event: any) => {
    // @ts-ignore
    if (dropRef.current && !dropRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick)
  }, [])

  return (
    <div className='w-full h-full bg-green-300 flex justify-between items-center px-4'>
      <div>
        <Link to="/" className='flex items-center gap-x-3'>
          <FaClinicMedical size={32} color='red' />
          <h2 className='text-xl font-bold'>PROmed</h2>
        </Link>
      </div>
      <div>
        <ul className='flex gap-x-4 text-lg'>
          <li>
            <Link to='/'>
              Главная
            </Link>
          </li>
          <li className='relative' ref={dropRef}>
            <button onClick={() => { setIsOpen(!isOpen) }}>Услуги</button>

            {isOpen && <div className='absolute w-[200px] text-lg bg-white rounded-lg mt-2 p-2 flex flex-col gap-y-2'>
              {services.map((service: IService) => {
                return (
                  <Link to={`/services/${service._id}`} onClick={() => { setIsOpen(false) }} className='hover:bg-black hover:opacity-35 hover:text-white rounded-lg p-1'>
                    {service.title}
                  </Link>
                )
              })}
            </div>}
          </li>
          <li>
            <Link to='/specialists'>
              Специалисты
            </Link>
          </li>
          <li>
            <Link to='/contacts'>
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header