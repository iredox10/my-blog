import FormBtn from '@/app/components/FormBtn'
import FormInput from '@/app/components/FormInput'
import Header from '@/app/components/Header'
import Title from '@/app/components/Title'
import { revalidatePath } from 'next/cache'

import Blog from '@/models/blog'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const getBlogs = async (slug) => { 
  const res = await fetch(`http://localhost:3000/api/blogs/${slug}`,{cache: 'no-store'})
  const data = await res.json()
  return data
}

const Admin = async ({params}) => {
  const slug = params.categorySlug
  const blogs = await getBlogs(slug)
  
  const addBlog = async (formData) => { 
    'use server'
    const title = formData.get('title')
    const subtitle = formData.get('subtitle')
    const blog = formData.get('blog')
    const summary = formData.get('summary')
    const author = formData.get('author')
    const image = formData.get('image')
    
    const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
      method: 'POST',
      body: JSON.stringify({title, subtitle, blog, summary, author, image}),
    })
    const data = await res.json()
    revalidatePath(`/admin/${slug}`)
  }


  return (
    <div>
      <Header />
      <h1 className='text-white text-2xl text-center capitalize'>{slug} blogs</h1>
      <div className='md:grid grid-cols-4'>
        <div className='col-span-3 md:grid grid-cols-4 gap-2 my-4 mx-6'>
          {blogs.blogs.map(blog =>(
            <div key={blog._id} className='bg-dark-color text-white'>
                <p>{blog.title}</p>
            </div>
          ))}
        </div>
      <div className='p-2 m-4 bg-dark-color'>
      <Title text='Add blog' />
        <form action={addBlog}>
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
           <div className='flex flex-col mb-3'>
            <label htmlFor="blog" className="text-white capitalize mb-1">blog</label>
          <textarea name="blog" id="blog" className='p-2 rounded-sm bg-[#BABABA]'></textarea>
          </div>
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
    </div>
  )
}

export default Admin