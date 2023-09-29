import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { UserContext } from "../UserContext"

const Nav = () => {

  const {userInfo, setUserInfo} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {
    const response = await axios.get(`${import.meta.env.VITE_ROUTE_API_2}/profile`, {withCredentials: true})
    setUserInfo(response.data.name)
  }

  const logout = async () => {
    await axios.post(`${import.meta.env.VITE_ROUTE_API_2}/logout`, {withCredentials: true})
    setUserInfo({})

    navigate("/login")
  }

  const userName = userInfo?.name

  return (
    <div className=" w-[100%] bg-black px-[1%] md:px-[5%] py-[.5%] flex justify-center items-center text-white">
      <div className=" text-left w-[30%]">
        <Link to="/">
          <h1 className=" text-red-400 text-xl font-bold"><span className=" text-white text-2xl">30</span>six</h1>
        </Link>
      </div>
      <div className=" w-[60%] flex justify-end gap-5 text-[12px]">
        {
          userName && (
            <>
              <span>Welcome, {userName}</span>
              <Link to={'/addpost'}>
                <h1>Add New Post</h1>
              </Link>
              <Link onClick={logout}>
                <h1>Logout</h1>
              </Link>
            </>
          ) 
        }
        {
          !userName && (
            <>
              <Link to="/login">
                <p>Login</p>
              </Link>
              <Link to="/register">
                <p>Register</p>
              </Link>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Nav