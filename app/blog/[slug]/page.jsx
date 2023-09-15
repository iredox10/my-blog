import Header from '@/app/components/Header'
import React from 'react'

const getBlog = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`,{cache: 'no-store'})
  const data = await res.json()
  // console.log(data)
  return data
}

const Blog = async ({params}) => {
  const slug = params.slug
  const blog = await getBlog(slug)
  console.log(blog)
  return (
    <div>
      <Header />
      <div className='p-2 md:px-40'>

      <h1 className='capitalize text-4xl text-secondary-color'>{blog.title}</h1>
      <div className='flex justify-between capitalize my-5'>
        <p className='text-secondary-color'><span className='font-extralight italic'>written by: </span>{blog.author}</p>
        <p className='text-secondary-color'><span className='font-extralight italic'>published on: </span>{blog.createdAt}</p>
      </div>
      <div className='p-2 bg-secondary-color'>
        {/* <img src="" alt="" /> */}
      </div>
      <div>
        {blog.blog}
      </div>
      </div>
    </div>
  )
}

export default Blog