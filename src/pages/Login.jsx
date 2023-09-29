import { useContext, useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { UserContext } from "../UserContext"

const initiateState = {
  name: "",
  password: ""
}


const Login = () => {

  const [user, setUser] = useState(initiateState)
  const {name, password} = user
  const {setUserInfo} = useContext(UserContext)

  const navigate = useNavigate()

  const login = async (data) => {
    await axios.post(`${import.meta.env.VITE_ROUTE_API_2}/login`, data, {
      headers: {"Content-Type": "application/json"},
      withCredentials: true
    }).then(response => {
      console.log(response)
      if (response.status === 200) {
        setUserInfo(response.data)
        navigate("/")
      }
    }).catch(err => {
      if (err) {
        alert("Wrong credentials")
      }
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    
    login(user)
  }

  const handleChange = (ev) => {
    const {name, value} = ev.target
    setUser({...user, [name]: value})

    console.log(user)
  }

  return (
    <div className=' w-full flex flex-col justify-center gap-9 items-center bg-white h-screen'>
      <form onSubmit={handleSubmit} className=' w-[80%] bg-white py-[2%] px-[3%] rounded-md form'>
        <h1 className=" text-center mb-9">Login</h1>
        <div className=' flex flex-col border p-2 rounded-md'>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={handleChange} className=' py-3 px-0 outline-none' />
        </div>
        <div className=' flex flex-col border p-2 rounded-md mt-4'>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={handleChange} className=' py-3 px-0 outline-none' />
        </div>
        <div>
          <button type="submit" className=' w-full bg-red-500 text-center p-3 rounded-md mt-4 text-white font-bold text-xl'>Login</button>
        </div>
      </form>

    </div>
  )
}

export default Login