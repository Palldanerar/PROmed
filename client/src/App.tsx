import { useEffect, useState } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Service from './pages/Service'
import Specialists from './pages/Specialists'
import Contacts from './pages/Contacts'
import axios from 'axios'
import { IDoctor } from './interface/IDoctor'
import { IUser } from './interface/IUser'
import { IService } from './interface/IService'
import Admin from './pages/Admin'
import { IApplication } from './interface/IApplication'
import { ICategory } from './interface/ICategory'
import Auth from './pages/Auth'

function App() {

  const [user, setUser] = useState<IUser | null>(null)
  const [doctors, setDoctors] = useState<IDoctor[]>([])
  const [services, setServices] = useState<IService[]>([])
  const [applications, setApplications] = useState<IApplication[]>([])
  const [categories, setCategories] = useState<ICategory[]>([])


  const getAllDoctors = async () => {
    const response = await axios.get("http://localhost:4801/doctors")
    const data = response.data
    setDoctors(data)
  }

  const getAllServices = async () => {
    const response = await axios.get("http://localhost:4801/services")
    const data = response.data
    setServices(data)
  }

  const getAllApplications = async () => {
    const response = await axios.get("http://localhost:4801/applications")
    const data = response.data
    setApplications(data)
  }

  const getAllCategories = async () => {
    const response = await axios.get("http://localhost:4801/Categories")
    const data = response.data
    setCategories(data)
  }

  useEffect(() => {
    getAllDoctors()
    getAllServices()
    getAllApplications()
    getAllCategories()
  }, [])

  return (
    <div className='w-full h-screen'>
      <div className='w-full h-14'>
        <Header services={services} />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home doctors={doctors} />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/:id' element={<Service />} />
          <Route path='/specialists' element={<Specialists doctors={doctors} />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/auth' element={<Auth setUser={setUser} />} />
          <Route path='/admin' element={<Admin doctors={doctors} applacations={applications} categories={categories} services={services} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
