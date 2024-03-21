import React from 'react'

const Contacts = () => {
  return (
    <div className='w-full block_screen'>
      <div className='w-[1400px] block_screen mx-auto flex items-center'>
        <div className='w-1/2 h-full flex justify-center items-center'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3143.4274331289407!2d43.92628566461421!3d56.27737678227337!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414e2a6509988b0b%3A0x1821dfec4a1959f3!2z0JPQvtGA0L7QtNGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMzM!5e0!3m2!1sru!2sru!4v1710927651880!5m2!1sru!2sru" width="600" height="450" loading="lazy"></iframe>
        </div>
        <div className='w-1/2 h-full flex flex-col items-center justify-center gap-y-3 select-none'>
          <div>
            <h2 className='font-bold text-3xl'>Контакты</h2>
          </div>
          <div className='text-lg text-wrap text-justify flex flex-col gap-y-3'>
            <h2 className='font-bold text-lg'>Филиалы</h2>
            <p>г. Копейск, Советский пер., д. 20</p>
            <p>г. Химки, Лесная ул., д. 1</p>
            <p>г. Новороссийск, Красноармейская ул., д. 14</p>
            <h2 className='font-bold text-lg'>Номер телефона</h2>
            <p>Регистратура: 7(811)625-04-22</p>
            <p>Главный врач: 7(272)341-56-60</p>
            <h2 className='font-bold text-lg'>Режим работы</h2>
            <p>С 7:30 до 22:00, ежедневно</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts