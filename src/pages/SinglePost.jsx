import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { UserContext } from "../UserContext"
import { formatISO9075 } from "date-fns"

const SinglePost = () => {

  const [postInfo, setPostInfo] = useState("")
  const {id} = useParams()
  const {userInfo} = useContext(UserContext)  

  useEffect(() => {
    getPost(id)
  }, [])

  const getPost = async (id) => {
    await axios.get(`${import.meta.env.VITE_ROUTE_API_2}/post/${id}`)
      .then(response => {
        setPostInfo(response.data[0])
      })
  }

  console.log(postInfo.title)

  console.log(postInfo)
  if (!postInfo) return ""

  return (
    <div className=" flex flex-col items-center gap-3 w-[100%] md:w-[55%] mx-auto p-3 px-5 py-6 bg-white border-b-2 border-solid">
      {
        userInfo.id === postInfo.author._id && (
          <div className=" px-4 py-2 rounded-md text-white bg-black m-2">
            <Link to={`/edit/${postInfo._id}`}>
              <button>Edit</button>
            </Link>
          </div>
        )
      }
      <h1 className=" font-bold text-2xl text-center">{postInfo.title}</h1>
      <pre className=" text-[11px] pt-2 text-gray-500 font-semibold">{formatISO9075(new Date(postInfo.createdAt))}</pre>
      <div>
        <img src={`../src/assets/${postInfo.cover}`} alt={`${postInfo.cover}`} className=" w-full rounded-sm" />
      </div>
      <div dangerouslySetInnerHTML={{__html:postInfo.value}} className=" text-[12px]" />
    </div>
  )
}

export default SinglePost