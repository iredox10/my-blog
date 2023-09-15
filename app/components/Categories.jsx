'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Categories = ({category}) => {
    const [showModel, setShowModel] = useState(false)
    const handleDelete = async (slug) =>{
        try{
            const res = await fetch(`http://localhost:3000/api/category/${slug}`,{
                method: 'DELETE'
            })
            const response = await res.json()
            console.log(response)
            setShowModel(false)
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        <div key={category._id} className='bg-dark-color text-white p-2'>
            <div className='flex justify-between items-center'>
            <h1 className='capitalize text-xl font-bold'>{category.name}</h1>
            <p>{category.shortName}</p>
            </div>
            <p>{category.desc}</p>
            <p style={{backgroundColor: category.color}}>{category.color}</p>
            <div className='flex gap-4 items-center'>
            <Link href={`/admin/${category.slug}`}>View</Link>
            <button onClick={() => setShowModel(!showModel)}>delete</button>
            </div>
          </div>
          {showModel && 
          <div className='absolute w-full h-screen  left-0 top-0 bg-dark-color/80 '>
          <div className=' relative top-[40%] w-1/4 left-2/4 p-5 translate-x-[-50%] bg-secondary-color/60 '>
            <p className='text-center capitalize my-2'>are you sure you want delete?</p>
            <div className='flex  justify-around  items-center gap-5'>
          <button onClick={() =>handleDelete(category.slug)} className='px-4 py-2 hover:shadow-lg hover:shadow-red-600 capitalize bg-red-700 text-white'>yes</button>
          <button onClick={() => setShowModel(!showModel)} className='px-4 py-2 hover:shadow-2xl hover:bg-dark-color capitalize bg-dark-color text-white'>no</button>
          </div>
          </div>
          </div>
          }
    </div>

  )
}

export default Categories