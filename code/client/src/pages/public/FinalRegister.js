import React, { useEffect } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import path from '../../ultils/path'
import Swal from 'sweetalert2'

const FinalRegister = () => {
  const { status } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (status === 'failed') Swal.fire('Oops!', ' Đăng ký thật bại', 'error').then(() => {
      navigate(`/${path.LOGIN}`)
    })
    if (status === 'success') Swal.fire('Congratulation!', ' Đăng ký thành công, hãy tiến hành đăng nhập', 'success').then(() => {
      navigate(`/${path.LOGIN}`)
    })

  }, [])
  return (
    //  <Navigate to={`/${path.LOGIN}`}  state={{status}}/> 
    <div className='w-screen h-screen bg-gray-300'> </div>
  )
}
export default FinalRegister