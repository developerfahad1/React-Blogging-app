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
 <div className="bg-blue-600 text-slate-100 p-4">
  <div className="flex justify-between items-center">
    {/* Branding */}
    <div className="text-xl font-bold text-black">
      <h1>BLOGGING APP</h1>
    </div>

    {/* Menu Button for Mobile */}
    <div className="md:hidden">
      <button className="text-white">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>

    {/* Menu Links */}
    <div className="hidden md:flex justify-end gap-8 items-center">
      <h5 className="hover:text-black transition duration-300">
        <Link to="/">Home</Link>
      </h5>
      <h5 className="hover:text-black transition duration-300">
        <Link to="/dashboard">Dashboard</Link>
      </h5>
      <h5 className="hover:text-black transition duration-300">
        <Link to="/profile">Profile</Link>
      </h5>
      <h5 className="hover:text-black transition duration-300">
        <Link to="/login">Login</Link>
      </h5>
      <h5 className="hover:text-black transition duration-300">
        <Link to="/register">Register</Link>
      </h5>
      <h5
        className="cursor-pointer text-red-600 hover:text-red-800 font-semibold transition duration-300"
        onClick={logoutUser}
      >
        Logout
      </h5>
    </div>
  </div>

  {/* Mobile Menu Links */}
  <div className="md:hidden flex flex-col mt-4 gap-4">
    <h5 className="hover:text-black transition duration-300">
      <Link to="/">Home</Link>
    </h5>
    <h5 className="hover:text-black transition duration-300">
      <Link to="/dashboard">Dashboard</Link>
    </h5>
    <h5 className="hover:text-black transition duration-300">
      <Link to="/profile">Profile</Link>
    </h5>
    <h5 className="hover:text-black transition duration-300">
      <Link to="/login">Login</Link>
    </h5>
    <h5 className="hover:text-black transition duration-300">
      <Link to="/register">Register</Link>
    </h5>
    <h5
      className="cursor-pointer text-red-600 hover:text-red-800 font-semibold transition duration-300"
      onClick={logoutUser}
    >
      Logout
    </h5>
  </div>
</div>


    </>
  )
}

export default Navbar