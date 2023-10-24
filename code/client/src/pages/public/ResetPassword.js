import React, { useState } from 'react'
import { Button } from '../../components'
import { useParams } from 'react-router-dom'
import { apiResetPassword } from '../../apis/user'
import { toast } from 'react-toastify'

import fgpw from '../../assets/Forgot_password.png'

const ResetPassword = () => {
  const [password, setPassword] = useState('')
  const { token } = useParams()
  console.log(token)
  const handlResetPassword = async () => {
    const response = await apiResetPassword({ password, token })
    if (response.success) {
      toast.success(response.mes, { theme: "colored" })
    } else toast.info(response.mes, { theme: "colored" })
  }
  return (
    <div
      className=' text-black  flex flex-col items-center  '>
      <div className=' flex flex-col gap-4'>
        <div className='flex-2 flex'>
          <img className='w-[300px] h-[300px] flex items-center' src={fgpw} alt='' />
        </div>
        <div>
          <label className='flex justify-center items-end' htmlFor='password' > Enter your new Password </label>
          <input
            type='text'
            id='password'
            placeholder='Type new password here  '
            className='rounded-full w-[800px] bg-slate-200 p-4 border-b outline-none '
            value={password}
            onChange={e => setPassword(e.target.value)}

          />
        </div>
      </div>
      <div className='flex gap-4 '>
        <Button
          name='submit'
          handleOnClick={handlResetPassword}
          style='px-4 py-2 rounded-md text-white my-2 bg-blue-500 text-semibold  '

        />

      </div>
    </div>
  )
}

export default ResetPassword