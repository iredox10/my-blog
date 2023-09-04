import FormBtn from '@/app/components/FormBtn'
import FormInput from '@/app/components/FormInput'
import Header from '@/app/components/Header'
import Title from '@/app/components/Title'
import Link from 'next/link'
import React from 'react'

const Admin = () => {
  return (
    <div>
      <Header />
      <div className='p-2 m-4 bg-dark-color'>
      <Title text='Add blog' />
        <form>
          <FormInput 
          labelFor='title'
          labelName='title'
          type='text'
          name='title'
          id='title'
          />
          <FormInput
            labelFor={'subtitle'}
            labelName={'subtitle'}
            type={'text'}
            name={'subtitle'}
            id={'subtitle'}
           />
          <textarea name="blog" id="blog" cols="30" rows="10">blog..</textarea>
            <FormInput 
            labelFor={'summary'}
            labelName={'summary'}
            type={'text'}
            name={'summary'}
            id={'summary'}
            />
            <FormInput 
            labelFor={'author'}
            labelName={'author'}
            type={'text'}
            name={'author'}
            id={'author'}
            />
           <FormInput
            labelFor={'image'}
            labelName={'image'}
            type={'file'}
            name={'image'}
            id={'image'}
            />
            <FormBtn text='Add blog' />
        </form>
      </div>
    </div>
  )
}

export default Admin