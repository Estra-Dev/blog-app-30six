import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/register'
import Layout from './Layout'
import { UserContextProvider } from './UserContext'
import AddEdit from './pages/AddEdit'
import SinglePost from './pages/SinglePost'
import EditPost from './pages/EditPost'

function App() {

  return (
    <UserContextProvider>
      <Router>
        <div>
          <div>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/addpost' element={<AddEdit />} />
                <Route path='/post/:id' element={<SinglePost />} />
                <Route path='/edit/:id' element={<EditPost />} />
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
    </UserContextProvider>
  )
}

export default App
