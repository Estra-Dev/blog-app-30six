import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const initiateState = {
  name: "",
  password: ""
}

const Register = () => {

  const [user, setUser] = useState(initiateState)
  const {name, password} = user
  const navigate = useNavigate()

  const handleChange = (ev) => {
    const {name, value} = ev.target
    setUser({...user, [name]: value})

    console.log(user)
  }

  const register = async (data) => {
    const response = await axios.post(`${import.meta.env.VITE_ROUTE_API_2}/register`, data)
    console.log(response)
    if (response.status !== 200) {
      alert("request Failt")
    }else{
      alert("register")
    }
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    register(user)
    
    navigate("/login")
  }

  return (
    <div className=' w-full flex flex-col justify-center gap-9 items-center bg-white h-screen'>
      <form onSubmit={handleSubmit} className=' w-[80%] bg-white py-[2%] px-[3%] rounded-md form'>
        <h1 className=" text-center mb-9">Register</h1>
        <div className=' flex flex-col border p-2 rounded-md'>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={handleChange} className=' py-3 px-0 outline-none' />
        </div>
        <div className=' flex flex-col border p-2 rounded-md mt-4'>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={handleChange} className=' py-3 px-0 outline-none' />
        </div>
        <div>
          <button type="submit" className=' w-full bg-black text-center p-3 rounded-md mt-4 text-red-400 font-bold text-xl'>Register</button>
        </div>
      </form>

    </div>
  )
}

export default Register