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
      <Title text='Add Category' />
        <form>
          <FormInput 
          labelFor='name'
          labelName='name'
          type='name'
          name='name'
          id='name'
          />
          <FormInput
            labelFor={'shortName'}
            labelName={'shortName'}
            type={'shortName'}
            name={'shortName'}
            id={'shortName'}
           />
          <FormInput
          labelFor={'description'}
          labelName={'description'}
          type={'description'}
          name={'description'}
          id={'description'}
          />
            <FormInput 
            labelFor={'color'}
            labelName={'color'}
            type={'color'}
            name={'color'}
            id={'color'}
            />
           <FormInput
            labelFor={'logo'}
            labelName={'logo'}
            type={'file'}
            name={'logo'}
            id={'logo'}
            />
            <FormBtn text='Add Category' />
        </form>
      </div>
    </div>
  )
}

export default Admin