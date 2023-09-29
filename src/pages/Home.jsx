import { useEffect, useState } from "react"
import Post from "./Post"
import axios from "axios"

const Home = () => {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    allPost()
  }, [])

  const allPost = async () => {
    await axios.get(`${import.meta.env.VITE_ROUTE_API_2}/posts`).then(response => {
      setPosts(response.data)
    }).catch(err => {
      console.log("cannot get", err)
    })
  }
  return (
    <div>
      {
        posts.length > 0 && posts.map(post => (
          <Post key={post._id} {...post} />
        ))
      }
    </div>
  )
}

export default Home