import Link from 'next/link'
import React from 'react'

const Blogs = ({blogs}) => {
  return (
    <div className='bg-dark-color'>
        <div className='bg-white p-2'>
        {/* <img src={blog.image} alt="blog image" /> */}
        </div>
        <div className="p-3">
            <button className='bg-dark-color py-1 px-2 text-secondary-color rounded-full '>category</button>
            <div className="">
                <h1 className='font-bold md:text-3xl my-3 text-white capitalize'>blog title</h1>
                {/* <ReactMarkdown className='text-white prose'>{`${blog.blog.slice(0,120)}...`}</ReactMarkdown> */}
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa exercitationem laboriosam iusto, cumque magni quas. Rerum exercitationem aliquam laborum omnis!</p>
                <Link href={`/`} className='bg-gradient-to-b from-[#E9F555] to-[#e8f55573] shadow-md shadow-[#e8f5559b] hover:shadow-[#e8f555ee] hover:shadow-lg hover:text-secondary-color text-white px-4 my-4 block w-32 py-2 rounded-full'>Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default Blogs