import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const toolbarOptions = { toolbar : [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  ['link', 'image'],

  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }], 
  [{ 'indent': '-1'}, { 'indent': '+1' }],
  [{ 'direction': 'rtl' }],

  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],
  

  ['clean']
] }

const modules = toolbarOptions

const Editor = ({value, onChange}) => {
  return (
    <div>
      <ReactQuill value={value} onChange={onChange} modules={modules} className=' py-2 px-0 outline-none' />
    </div>
  )
}

export default Editor