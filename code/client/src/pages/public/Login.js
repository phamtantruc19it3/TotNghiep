import React, { useState, useCallback } from 'react'
import { InputField, Button } from '../../components'

import path from '../../ultils/path'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Login = () => {

  const [payload, setPayload] = useState({
    email: '',
    password: '',
    name: '',
  })
  const [isRegister,setIsRegister] = useState(false)
  const handleSumbit = useCallback(() => {
console.log(payload)
  }, [payload])

  return (
    <div className="bg-white font-family-karla h-screen">
      <div className="w-full flex flex-wrap">


        <div className="w-full md:w-1/2 flex flex-col">

          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <Link to={`/${path.HOME}`}>
              <img src={logo} alt='logo' className='w-[100px] object-contain' />
            </Link>
          </div>

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Welcome</p>
            <form className="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
              <div className="flex flex-col pt-4">
                {/* <label for="email" className="text-lg">Email</label> */}
                {isRegister &&  <InputField
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  value={payload.name}
                  setValue={setPayload}
                  placeholder="Name's user"
                  nameKey='name'
                /> }
                <InputField
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  value={payload.email}
                  setValue={setPayload}
                  placeholder='abc@example.com'
                  nameKey='email'
                />
              </div>

              <div className="flex flex-col pt-4">
                {/* <label for="password" className="text-lg">Password</label> */}
                {/* <input type="password" id="password" placeholder="Password"  /> */}
                <InputField
                  className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  value={payload.password}
                  setValue={setPayload}
                  nameKey='password'
                  type='password'
                />

              </div>
              <Button
                // className="bg-[#cc4545] border text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
                name={isRegister? 'Register' : 'Login'}
                handleOnClick={handleSumbit}
                fw

              />
              {/* <input type="submit" value="Log In" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" /> */}
            </form>

            <div className="text-center pt-4   ">
             {!isRegister &&  <span className='h-3  cursor-pointer hover:text-red-400 hover:underline ' > Forgot your password</span> }
              {!isRegister && <p className='mt-4 '>Don't have an account? <br/>
                <span className="underline font-semibold cursor-pointer hover:text-green-300"
                onClick={()=>setIsRegister(true)}
                >Register here</span>
              </p>}
              {isRegister && <p className='mt-4 '>
                <span className="underline font-semibold cursor-pointer hover:text-green-300"
                onClick={()=>setIsRegister(false)}
                >Go Login</span>
              </p>}
            </div>
          </div>

        </div>


        <div className="w-1/2 shadow-2xl">
          <img className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" />
        </div>
      </div>
    </div>
  )
}

export default Login