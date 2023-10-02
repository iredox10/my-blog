import FormBtn from '@/app/components/FormBtn'
import FormInput from '@/app/components/FormInput'
import Header from '@/app/components/Header'
import Link from 'next/link'
import { redirect } from "next/navigation";
import React from 'react'

const Login = () => {

 async function handleSubmit(formData) {
   "use server";
   const username = formData.get("username");
   const password = formData.get("password");

     const res = await fetch("http://localhost:3000/api/users/login", {
       method: "POST",
       body: JSON.stringify({ username, password }),
      //  always invole the headers. 
      // it cause you morethan 4 hours to figure out the problem. remember that
       headers: {
         "Content-Type": "application/json",
       },
     });
     const data = await res.json();
     if (res.status === 200) {
       console.log(data);
       if (data.user.isAdmin) {
         const r = redirect("/admin");
         console.log(r);
       } else {
         redirect("/");
       }
     } else {
       console.error(`Error: Status ${res.status}`);
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