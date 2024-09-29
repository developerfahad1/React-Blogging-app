import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { signUpUser, uploadImage } from '../config/firebase/firebasemethods';

const Register = () => {
  const fullName = useRef();
  const email = useRef();
  const password = useRef();
  const profileImage = useRef();
  const navigate = useNavigate(); // Initialize useNavigate

  const loginUserFromFirebase = async (event) => {
    event.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(fullName.current.value);
    console.log(profileImage.current.files[0]);

    const userProfileImageUrl = await uploadImage(profileImage.current.files[0], email.current.value);

    try {
      const userData = await signUpUser({
        email: email.current.value,
        password: password.current.value,
        fullName: fullName.current.value,
        profileImage: userProfileImageUrl,
      });
      console.log(userData);

      // Show success alert
      alert('User registered successfully!');

      // Navigate to the login page
      navigate('/login');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <form onSubmit={loginUserFromFirebase}>
          <input type="text" placeholder="Enter Your Full Name" ref={fullName} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <br /><br />
          <input type="email" placeholder="Enter Your email" ref={email} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <br /><br />
          <input type="password" placeholder="Enter Your password" ref={password} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <br /><br />
          <input type="file" placeholder="Enter Your Profile Image" ref={profileImage} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <br /><br />
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" type="submit">
            Register
          </button><br /><br />
          <Link to='/login' className="text-center text-black hover:underline mt-4 ">
              ALREADY A USER? PLEASE LOGIN
            </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
