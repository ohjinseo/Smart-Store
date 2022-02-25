import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { loginUserAction } from '../redux/slices/userSlice';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const res = useSelector(state => state.usersReducer);
  const {userAppErr, userAuth, userLoading} = res;

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(loginUserAction({email, password}))
  }

  
  useEffect(() => {
    userAuth && navigate("/");
}, [navigate, userAuth])


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/4 flex px-8 py-16 flex-col items-center justify-center ">

        <h1 className="text-4xl mb-10">L O G I N</h1>
        <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" className=" w-full mb-5 border-solid border-b-[1px] border-gray-300 px-4 py-2" />
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className=" w-full px-4 py-2 border-solid border-b-[1px] border-gray-300 mb-8" />

        <button  onClick={(e) => handleClick(e)} className="px-4 py-3 bg-violet-800 w-full text-white " >LOGIN</button>
      </div>

    </div>
  )
}

export default Login