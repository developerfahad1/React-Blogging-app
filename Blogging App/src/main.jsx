import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Profile from './pages/Profile.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SingleUser from './pages/SingleUser.jsx'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'


const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children:[
      {
        path: '', 
        element: <Home />
      },
      {
        path: 'login', 
        element: <Login />
      },
      {
        path: 'register', 
        element: <Register />
      },
      {
        path: 'profile',
        element: <ProtectedRoutes component={<Profile/>}/>
      },
      {
        path: 'dashboard',
        element: <ProtectedRoutes component={<Dashboard/>}/>
      },
      {
        path: 'user',
        element: <ProtectedRoutes component={<SingleUser/>}/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
     <App />
  </RouterProvider>
   
  
)
