import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { auth, getData, sendData } from '../config/firebase/firebasemethods'
import { onAuthStateChanged } from 'firebase/auth'

const Dashboard = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [blogs, setBlogs] = useState([])

  useEffect(() => {

      onAuthStateChanged(auth , async(user)=>{
        if(user){
          console.log(user.uid)
          const blogsData = await getData("blogs" , user.uid)
          console.log(blogsData)
          setBlogs([...blogsData])
        }
      })
  }, [])

  const sendDatatoFirestore = async (data) => {
    console.log(data)
    try {
      const response = await sendData({
        title: data.title,
        description: data.description,
        uid: auth.currentUser.uid
      }, 'blogs')
      blogs.push({
        title: data.title,
        description: data.description,
        uid: auth.currentUser.uid
      })
      setBlogs([...blogs])
      console.log(response);


    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
     <h1 className='text-center m-3 text-2xl font-bold'>Dashboard</h1>
<form onSubmit={handleSubmit(sendDatatoFirestore)} className='m-5 space-y-4'>
  <input
    type="text"
    placeholder='Title'
    {...register("title", { required: true })}
    className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
  />
  <br />
  {errors.title && <span className='text-red-500 text-sm'>This field is required</span>}
  
  <br />
  <textarea
    cols='25'
    rows='5'
    placeholder='Enter description'
    {...register("description", { required: true })}
    className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
  ></textarea>
  <br />
  {errors.description && <span className='text-red-500 text-sm'>This field is required</span>}
  
  <br />
  <button
    type='submit'
    className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300'
  >
    Add Blog
  </button>
</form>


<h1 className='text-center text-3xl font-bold mb-8 text-gray-800'>User Blogs</h1>
<div>
  {blogs.length > 0 ? blogs.map((item, index) => {
    return (
      <div key={index} className="bg-white shadow-md rounded-lg m-5 p-5 border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h1>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
    )
  }) : <h1 className='text-center text-xl text-gray-600'>No blogs found</h1>}
</div>
    </>
  )
}

export default Dashboard