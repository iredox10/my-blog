import Header from '@/app/components/Header'
import ReactMarkdown from 'react-markdown'

const getBlog = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`,{cache: 'no-store'})
  const data = await res.json()
  // const serial = await serialize(data.blog)
  // console.log(serial)
  return data
}

async function handleSubmit(FormData){
  'use server'  
  const comment = FormData.get('comment')
  try{
    const res = await fetch('http://localhost:3000/api/blog/comment',{})
  }catch(e){
    console.log(e.message)
  }
}

const Blog = async ({params}) => {
  const slug = params.slug
  const blog = await getBlog(slug)
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
       <ReactMarkdown className='prose lg:prose-xl prose-zinc text-white'>{blog.blog}</ReactMarkdown>
      </div>
      </div>
      <div>
        <form action={handleSubmit}>
          <label htmlFor="comment">comment</label>
          <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
          <button>post</button>
        </form>
      </div>
    </div>
  )
}

export default Blog