import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import DoctorCard from '../components/DoctorCard';
import { Link } from 'react-router-dom';
import { IDoctor } from '../interface/IDoctor';

interface HomeProps {
  doctors: IDoctor[]
}

const Home = ({ doctors }: HomeProps) => {
  return (
    <div className='w-full h-auto'>
      <div className='w-[1400px] block_screen mx-auto flex items-center'>
        <div className='w-1/2 h-full flex justify-center items-center'>
          <img className='w-[650px] h-auto rounded-lg' src='https://prodoctorov.ru/media/photo/kovrov/lpuimage/43705/734029-pervyy-klinicheskiy-medicinskiy-centr_l.jpg' />
        </div>
        <div className='w-1/2 h-full flex flex-col items-center justify-center gap-y-3 select-none'>
          <div>
            <h2 className='font-bold text-3xl'>О нас</h2>
          </div>
          <div className='text-lg text-wrap text-justify flex flex-col gap-y-3'>
            <p>
              Медицинский центр "PROmed" - это современное, оборудованное по последнему слову
              техники медицинское учреждение, которое предлагает своим пациентам полный спектр качественных
              медицинских услуг. Наш центр расположен в уютном здании, где каждый пациент почувствует себя
              комфортно и спокойно.
            </p>
            <p>
              Медицинский центр "PROmed" специализируется на диагностике, профилактике и лечении
              различных заболеваний. Мы предлагаем широкий спектр услуг, таких как: консультации врачей разных
              специальностей, ультразвуковая диагностика, функциональная диагностика, лабораторные исследования,
              физиотерапия и многое другое..
            </p>
            <p>
              В нашем медицинском центре работают опытные и высококвалифицированные специалисты, которые постоянно
              совершенствуют свои знания и навыки, чтобы предложить пациентам самые передовые и эффективные методы
              лечения. Мы гарантируем индивидуальный подход к каждому пациенту, а также полную конфиденциальность и
              анонимность.
            </p>
          </div>
        </div>
      </div>
      <div className='w-[1400px] h-auto mx-auto'>
        <div>
          <h2 className='font-bold text-3xl text-center'>Наши преимущества</h2>
          <div className='w-full h-auto flex justify-between items-start mt-10'>
            <div className='w-[450px] h-auto flex flex-col items-center'>
              <CiCircleMore size={256} />
              <div className='flex flex-col gap-y-2 mt-6'>
                <h2 className='font-bold text-xl text-center'>Большой спект услуг</h2>
                <p className='text-center text-lg'>
                  Наш центр предлагает широкий спектр медицинских услуг, включая консультации врачей, диагностику, лечение,
                  профилактику и реабилитацию.
                </p>
              </div>
            </div>
            <div className='w-[450px] h-auto flex flex-col items-center'>
              <FaUserDoctor size={256} />
              <div className='flex flex-col gap-y-2 mt-6'>
                <h2 className='font-bold text-xl text-center'>Лучшие специалисты</h2>
                <p className='text-center text-lg'>
                  В нашем центре работают опытные врачи, которые имеют высокую квалификацию и большой опыт работы.
                </p>
              </div>
            </div>
            <div className='w-[450px] h-auto flex flex-col items-center'>
              <BsCurrencyDollar size={256} />
              <div className='flex flex-col gap-y-2 mt-6'>
                <h2 className='font-bold text-xl text-center'>Доступные цены</h2>
                <p className='text-center text-lg'>
                  Мы предлагает доступные цены на свои услуги, что делает их доступными для широкого круга населения.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[1400px] h-auto mx-auto mt-7'>
        <div>
          <h2 className='font-bold text-3xl text-center'>Наши специалисты</h2>
        </div>
        <div className='w-full flex justify-between flex-wrap gap-3 mt-7'>
          {doctors.slice(-3).map((doctor: IDoctor) => {
            return (
              <DoctorCard doctor={doctor} />
            )
          })}
        </div>
        <div className='flex justify-center mt-7 p-4'>
          <Link to="/specialists">
            <button className='btn btn-success'>Ещё</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home