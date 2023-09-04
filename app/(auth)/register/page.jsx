import FormBtn from '@/app/components/FormBtn'
import FormInput from '@/app/components/FormInput'
import Header from '@/app/components/Header'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div>
      <Header />
      <div className='p-5 bg-dark-color mx-5 my-12 md:w-2/6 md:mx-auto'>
        <div className='text-center'>
        <h1 className=' capitalize text-white text-2xl font-bold'>Register</h1>
        </div>
        <div>
          <FormInput
          labelName={'full Name'}
          labelFor={'fullName'}
          type={'text'}
          name={'fullName'}
          Id={'fullName'}
          />
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
          <FormInput
          labelName={'Repeat Password'}
          labelFor={'repeatPassword'}
          type={'password'}
          name={'repeatPassword'}
          Id={'repeatPassword'}
          />
          <FormBtn text={'register'} />
        <p className='text-secondary-color'>Already have an account? <Link href='/login' className='underline hover:text-yellow'>login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login