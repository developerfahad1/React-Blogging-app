import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOutUser } from '../config/firebase/firebasemethods'

const Navbar = () => {

   // useNavigate
   const navigate = useNavigate()

   const logoutUser = async () => {
     const user = await signOutUser();
     setIsUser(false)
     console.log(user);
     navigate('login')
   }


  return (
    <>
    <div className="flex justify-between items-center h-12 bg-blue-600 text-slate-100 p-2">
      <div className='text-2xl font-bold text-black'>
      <h1>BLOGGING APPS</h1>
      </div >
      <div className='justify-end gap-12 flex '>
        <h5 class="hover:text-black transition duration-300"><Link to=''>Home</Link></h5>
        <h5 class="hover:text-black transition duration-300"><Link to='dashboard'>Dashboard</Link></h5>
        <h5 class="hover:text-black transition duration-300"><Link to='profile'>Profile</Link></h5>
        <h5 class="hover:text-black transition duration-300"><Link to='login'>Login</Link></h5>
        <h5 class="hover:text-black transition duration-300"><Link to='register'>Register</Link></h5>
        </div>
        <h5 
  className='cursor-pointer text-red-600 hover:text-red-800 font-semibold transition duration-300' 
  onClick={logoutUser}
>
  Logout
</h5>

      </div>
    </>
  )
}

export default Navbar