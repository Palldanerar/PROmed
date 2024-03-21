import React from 'react'

const ServiceCard = () => {
  return (
    <div className='w-[250px] h-auto p-2 rounded-lg border border-black gap-y-2'>
      <div>
        <img className='rounded-lg' src="https://naked-science.ru/wp-content/uploads/2016/04/article_entweeklyhires02.jpg" alt="" />
      </div>
      <div>
        <h2 className='font-bold text-xl text-center'>УЗИ</h2>
        <p className='text-center text-lg'>
          Профилактическая
        </p>
      </div>
    </div>
  )
}

export default ServiceCard