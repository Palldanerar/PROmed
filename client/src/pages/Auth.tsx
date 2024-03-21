import React, { useState } from 'react'
import { IUser } from '../interface/IUser'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

interface AuthProps {
  setUser: ({ }: IUser) => void,
}

const Auth = ({ setUser }: AuthProps) => {


  const navigate = useNavigate()
  const [login, setLogin] = useState("admin")
  const [password, setPassword] = useState("adminpromed")

  const authUser = async () => {
    const response = await axios.post("http://localhost:4801/users/login", {
      login, password
    })

    if (response.status == 201) {
      setUser({ login, password })
      toast.success("Вы успешно авторизовались!")
      return navigate("/admin")
    }

    toast.error("Неверный логин или пароль")
  }

  return (
    <div className='w-full block_screen flex justify-center items-center'>
      <div className='w-[1400px] h-auto flex flex-col items-center gap-y-3'>
        <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" placeholder="login" className="input input-bordered w-full max-w-xs" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
        <button onClick={authUser} className='btn btn-success'>Войти</button>
      </div>
    </div>
  )
}

export default Auth