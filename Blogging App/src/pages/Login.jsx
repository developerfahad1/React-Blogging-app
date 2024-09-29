import React from 'react'
import { useForm } from "react-hook-form"
import { loginUser } from '../config/firebase/firebasemethods'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  const loginUserFromFirebase = async (data) => {
    console.log(data)
    try {
      const userLogin = await loginUser({
        email: data.email,
        password: data.password
      })
      console.log(userLogin)
      
      
      if (userLogin) {
        alert('Login successfully');  
        navigate('/dashboard')  
      }

    } catch (error) {
      console.error(error)
      alert('Login failed. Please try again.'); 
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit(loginUserFromFirebase)}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
          <br />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password", { required: true })}
          />
          {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
          <br />

          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Login
          </button><br /><br />
          <Link to='/register' className="text-center text-black hover:underline mt-4 ">
              NOT A USER? PLEASE REGISTER
            </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
