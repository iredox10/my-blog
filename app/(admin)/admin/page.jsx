import FormBtn from '@/app/components/FormBtn'
import FormInput from '@/app/components/FormInput'
import Header from '@/app/components/Header'
import Title from '@/app/components/Title'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'

  
const getCategories = async () =>{
  const res = await fetch('http://localhost:3000/api/categories',{cache: 'no-store'})
  const data = await res.json()
  return data
}
const Admin = async () => {
  const categories = await getCategories()

    async function addCategory(formData){
      'use server'
      const name = formData.get('name')
      const shortName = formData.get('shortName')
      const desc = formData.get('desc')
      const color = formData.get('color') 
      const logo = formData.get('logo')

      const res = await fetch('http://localhost:3000/api/categories', {
        method: 'POST', 
        body: JSON.stringify({name, shortName, desc, color}),
        // headers: {
        //   'Content-Type': 'application/json'
        // }
      })
      const data = await res.json()
      console.log(data)
      revalidatePath('/admin')
      // redirect('/')
    }


  return (
    <div>
      <Header />
      <div className='flex'>
      <div className='flex-1 md:grid grid-cols-4 gap-4 my-4 mx-6'>
        {categories.map(category => (
          <div key={category._id} className='bg-dark-color text-white p-2'>
            <p>{category.name}</p>
            <p>{category.shortName}</p>
            <p>{category.desc}</p>
            <p style={{backgroundColor: category.color}}>{category.color}</p>
            <Link href={`/admin/${category.slug}`}>View</Link>
          </div>
        ))}
      </div>
      <div className='p-2 m-4 bg-dark-color'>
      <Title text='Add Category' />
        <form action={addCategory}>
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
          name={'desc'}
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
    </div>
  )
}

export default Admin