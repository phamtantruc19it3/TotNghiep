import React, { useState, useCallback } from 'react'
import icons from '../../ultils/icons'
import { InputField, Button } from '../../components'
import { apiRegister, apiLogin, apiForgotPassword } from '../../apis/user'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { register } from '../../store/user/userSlice'
import { useDispatch } from 'react-redux'
import path from '../../ultils/path'
import logo from '../../assets/logo.png'
import fgpw from '../../assets/Forgot_password.png'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const { BiShow, BiHide, } = icons
const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()



  const [payload, setPayload] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    mobile: ''
  })
  const [isForgotPassword, setIsForgotPassword] = useState(false)


  const [isRegister, setIsRegister] = useState(false)
  const resetPayload = () => {
    setPayload({
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      mobile: ''
    })
  }



  const [email, setEmail] = useState('')
  const handleForgotPassword = async () => {
    const response = await apiForgotPassword({ email })
    if (response.success) {
        toast.success(response.mes, { theme: "colored" })
    } else toast.info(response.mes, { theme: "colored" })
  }
  const handleSumbit = useCallback(async () => {
    const { firstname, lastname, phone, ...data } = payload
    if (isRegister) {
      const response = await apiRegister(payload)
      if (response.success) {
        Swal.fire('Congratulation', response.mes, 'success').then(() => {
          setIsRegister(false)
          resetPayload()
        })
      } else Swal.fire('Oops!', response.mes, 'error')
    } else {
      const rs = await apiLogin(data)
      if (rs.success) {
        dispatch(register({ isLoggedIn: true, token: rs.accessToken, userData: rs.userData }))
        navigate(`/${path.HOME}`)
      } else Swal.fire('Oops!', rs.mes, 'error')
    }
  }, [payload, isRegister])



  return (

    <div className="w-screen font-family-karla h-screen relative">
      {isForgotPassword && <div className='absolute w-full h-full flex flex-col items-center bg-[#1110]'>
        <div
          className='absolute rounded-tr-full rounded-br-full rounded-bl-full slide-bottom  text-black bg-[#25e5f0] flex flex-col items-center
    left-0 top-0 right-40 bottom-[300px] '>
          <div className=' flex flex-col gap-4'>
            <div className='flex-2 flex'>
              <img className='w-[250px] h-[250px] flex items-center' src={fgpw} alt='' />
              <label className='flex justify-center items-end' htmlFor='email' > Enter your email address: </label>
            </div>
            <input
              type='text'
              id='email'
              placeholder='example@example.com'
              className='rounded-full w-[800px] p-4 border-b outline-none '
              value={email}
              onChange={e => setEmail(e.target.value)}

            />
          </div>
          <div className='flex gap-4 '>
            <Button
              name='submit'
              handleOnClick={handleForgotPassword}
              style='px-4 py-2 rounded-md text-white my-2 bg-blue-500 text-semibold  '

            />
            <Button
              name='Back'
              handleOnClick={() => setIsForgotPassword(false)}
              className='flex items-center justify-center mt-4 '

            />
          </div>
        </div>
      </div>}
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
                {isRegister &&
                  <div>
                    <div className='flex items-center gap-2'>
                      <InputField
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                        value={payload.firstname}
                        setValue={setPayload}
                        placeholder="First name "
                        nameKey='firstname'
                      />
                      <InputField
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                        value={payload.lastname}
                        setValue={setPayload}
                        placeholder="Last name "
                        nameKey='lastname'
                      />

                    </div>
                    <div>
                      <InputField
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                        value={payload.mobile}
                        setValue={setPayload}
                        placeholder="Mobile"
                        nameKey='mobile'
                        type='number'
                      />

                    </div>
                  </div>


                }
                <InputField
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  value={payload.email}
                  setValue={setPayload}
                  placeholder='abc@example.com'
                  nameKey='email'
                />
              </div>

              <div className="flex-2 flex pt-4">
                {/* <label for="password" className="text-lg">Password</label> */}
                {/* <input type="password" id="password" placeholder="Password"  /> */}
                <InputField
                  className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  value={payload.password}
                  setValue={setPayload}
                  nameKey='password'
                  type="password"
                  id="password"
                />

              </div>


              {/* <span className='flex  justify-end mt-[-40px] mb-[30px] ' onClick={()=>sethide(!hide)}> <BiHide size={25} /></span> */}
              <Button
                // className="bg-[#cc4545] border text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
                name={isRegister ? 'Register' : 'Login'}
                handleOnClick={handleSumbit}
                fw

              />
              {/* <input type="submit" value="Log In" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" /> */}
            </form>

            <div className="text-center pt-4   ">
              {!isRegister && <span onClick={() => setIsForgotPassword(true)}
                className='h-3  cursor-pointer hover:text-red-400 hover:underline '>Forgot your password</span>}
              {!isRegister && <p className='mt-4 '>Don't have an account? <br />
                <span className="underline font-semibold cursor-pointer hover:text-green-300"
                  onClick={() => setIsRegister(true)}
                >Register here</span>
              </p>}
              {isRegister && <p className='mt-4 '>
                <span className="underline font-semibold cursor-pointer hover:text-green-300"
                  onClick={() => setIsRegister(false)}
                >Go Login</span>
              </p>}
            </div>
          </div>

        </div>


        <div className="w-1/2 shadow-2xl">
          <img alt='' className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" />
        </div>
      </div>
    </div>
  )
}

export default Login