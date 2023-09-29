import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import Editor from './Editor';

const initialState = {
  title: "",
  summary: "",
}

const AddEdit = () => {

  const [content, setContent] = useState(initialState)
  const {title, summary} = content
  const [value, setValue] = useState("")
  const [files, setFiles] = useState("")

  const navigate = useNavigate()

  const handleChanges = (ev) => {
    const {name, value} = ev.target
    setContent({...content, [name]: value})

    console.log(content)
  }

  const addPost = async (data) => {
    
    await axios.post(`${import.meta.env.VITE_ROUTE_API_2}/post`, data, {
      withCredentials: true
    })
      .then(response => {
        if (response.status === 200) {
          navigate("/")
        }
      })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const data = new FormData()
    data.set('title', title)
    data.set('summary', summary)
    data.set('value', value)
    data.set('file', files)

    console.log(data)
    addPost(data)
  }

  return (
    <div className=' w-full flex justify-center items-center bg-slate-200 h-screen px-4'>
      <form onSubmit={handleSubmit} className=' w-[100%] md:w-[50%] bg-white py-[2%] px-[3%] rounded-md form'>
        <div className=' flex flex-col border p-2 rounded-md'>
          <label htmlFor="title">Title</label>
          <input type="text" placeholder="Title" name='title' value={title} onChange={handleChanges} className=' py-3 px-0 outline-none' />
        </div>
        <div className=' flex flex-col border p-2 rounded-md mt-2'>
          <label htmlFor="summary">Summary</label>
          <input type="text" placeholder="Summary" name='summary' value={summary} onChange={handleChanges} className=' py-3 px-0 outline-none' />
        </div>
        <div className=' flex flex-col border p-1 rounded-md mt-2'>
          <label htmlFor="image">Add Image</label>
          <input type="file" onChange={ev => setFiles(ev.target.files[0])} className=' py-2 px-0' />
        </div>
        <div className=' flex flex-col border p-2 rounded-md mt-2'>
          <label htmlFor="content">Contents</label>
          <Editor value={value} onChange={setValue} />
        </div>
        <button className=' w-full bg-red-500 text-center p-3 rounded-md mt-1 text-white font-bold text-xl'>Post</button>
      </form>
    </div>
  )
}

export default AddEdit