import {formatISO9075} from "date-fns"
import { Link } from "react-router-dom"

const Post = ({title, summary, cover, createdAt, author, _id}) => {

  console.log(`../src/assets${cover}`)
  return (
    <div className=" flex flex-col items-end gap-3 w-[100%] md:w-[45%] mx-auto p-3 px-5 pt-6 bg-white border-b-2 border-solid">
      <div className=" w-[100%] flex items-center justify-between gap-3">
        <h4 className=" font-bold text-[14px] pt-2">{author.name}</h4>
        <pre className=" text-[11px] pt-2 text-gray-500 font-semibold">{formatISO9075(new Date(createdAt))}</pre>
      </div>
      <div className="img w-[85%]">
        <Link to={`/post/${_id}`}>
          <img src={`../src/assets/${cover}`} alt={`${cover}`} className=" w-[97%] rounded-md" />
        </Link>
      </div>
      <div className="text w-[90%] px-3 py-1">
        <Link to={`/post/${_id}`}>
          <h1 className=" font-bold text-2xl">{title}</h1>
        </Link>
        <p className=" mt-3 text-[12px] font-medium">{summary.slice(0, 100)}...</p>
      </div>
    </div>
  )
}

export default Post