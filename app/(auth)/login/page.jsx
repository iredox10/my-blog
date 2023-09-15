import FormBtn from '@/app/components/FormBtn'
import FormInput from '@/app/components/FormInput'
import Header from '@/app/components/Header'
import Link from 'next/link'
import React from 'react'

const Login = () => {

const handleSubmit = async (formData) => { 
  'use server'
  const username = formData.get('username')
  const password = formData.get('password')
  try{
    const res = await fetch('http://localhost:3000/api/users/login',
    {
      method: 'POST',
      body: JSON.stringify({username,password})
    })
    if(res.status === 200){
      const data = await res.json()
      console.log(data)
    }else{
      console.log(`Error: Status ${res.status}`)
    }
  }catch(err){
    console.log(err)
  }

}
  return (
    <div>
      <Header />
      <div className='p-5 bg-dark-color mx-5 my-16 md:w-2/6 md:mx-auto'>
        <div className='text-center'>
        <h1 className=' capitalize text-white text-2xl font-bold'>login</h1>
        </div>
        <form action={handleSubmit}>
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
        </form>
        <p className='text-secondary-color'>Don't have an account? <Link href='/register' className='underline'>Register</Link></p>
      </div>
    </div>
  )
}

export default Login