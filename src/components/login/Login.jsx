import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../firebase/firebase';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    profilePhoto: ''
  });

  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();
  };
  const register = () => {
    if (!formData.name) {
      alert('Please enter your name');
      return;
    }
    if (!formData.email) {
      alert('Please enter your email');
      return;
    }
    if (!formData.password) {
      alert('Please enter your password');
      return;
    }

    auth
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then(res => {
        console.log(res);
        res.user
          .updateProfile({
            displayName: formData.name,
            photoURL: formData.profilePhoto
          })
          .then(() => {
            dispatch(
              login({
                email: res.user.email,
                uid: res.user.uid,
                displayName: res.user.displayName,
                photoURL: res.user.photoURL
              })
            );
          });
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  };

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="login">
      <h1 className="text-center text-3xl my-20">Lightning Network</h1>
      <div className="login-card w-1/2 m-auto my-20 ">
        <form>
          <label
            className="relative block p-3 my-4 rounded-lg border-solid border-black border-2 shadow-lg w-1/2 m-auto"
            for="name"
          >
            <span className="text-xs font-medium text-black" for="name">
              Full Name (Required if registering)
            </span>

            <input
              className="w-full p-0 text-sm border-none focus:ring-0 bg-inherit"
              id="name"
              type="text"
              value={formData.name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </label>
          <label
            className="relative block p-3 my-4 rounded-lg border-solid border-black border-2 shadow-lg w-1/2 m-auto"
            for="name"
          >
            <span className="text-xs font-medium text-black" for="name">
              Profile Picture URL (optional)
            </span>

            <input
              className="w-full p-0 text-sm border-none focus:ring-0 bg-inherit"
              value={formData.profilePhoto}
              id="profilePhoto"
              type="text"
              placeholder="Enter the URL of your profile picture"
              onChange={onChange}
            />
          </label>
          <label
            className="relative block p-3 my-4 rounded-lg border-solid border-black border-2 shadow-lg w-1/2 m-auto"
            for="name"
          >
            <span className="text-xs font-medium text-black" for="name">
              Email
            </span>

            <input
              className="w-full p-0 text-sm border-none focus:ring-0 bg-inherit"
              id="email"
              type="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </label>
          <label
            className="relative block p-3 my-4 rounded-lg border-solid border-black border-2 shadow-lg w-1/2 m-auto"
            for="name"
          >
            <span className="text-xs font-medium text-black" for="name">
              Password
            </span>

            <input
              className="w-full p-0 text-sm border-none focus:ring-0 bg-inherit"
              id="password"
              type="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </label>
        </form>
        <button
          type="sumbit"
          onClick={handleLogin}
          className="flex items-center justify-center px-8 py-4 font-bold transition bg-white mt-32 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-pink-50 w-1/2 m-auto"
        >
          Submit
          <span aria-hidden="true" className="ml-1.5" role="img">
            🚀
          </span>
        </button>
        <div className="text-center mt-10">
          Not a member?{' '}
          <span className="text-blue-500 cursor-pointer" onClick={register}>
            Register Now
          </span>{' '}
        </div>
      </div>
    </div>
  );
}

export default Login;
