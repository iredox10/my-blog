import FormBtn from '@/app/components/FormBtn'
import FormInput from '@/app/components/FormInput'
import Header from '@/app/components/Header'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div>
      <Header />
      <div className='p-5 bg-dark-color mx-5 my-16 md:w-2/6 md:mx-auto'>
        <div className='text-center'>
        <h1 className=' capitalize text-white text-2xl font-bold'>login</h1>
        </div>
        <div>
          <FormInput
          labelName={'username'}
          labelFor={'username'}
          type={'text'}
          name={'username'}
          Id={'username'}
          />
          <FormInput
          labelName={'password'}
          labelFor={'password'}
          type={'password'}
          name={'password'}
          Id={'password'}
          />
          <FormBtn text={'login'} />
        <p className='text-secondary-color'>Don't have an account? <Link href='/register' className='underline'>Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login