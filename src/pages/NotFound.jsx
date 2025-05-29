import React from 'react'
import {not_found} from '../assets/assets'
import { IoHome } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='text-white w-full sm:pl-[10rem] items-center flex flex-col'>
        <img className='mx-auto w-[25rem] sm:w-[25rem] ' src={not_found} alt="Not Found Img" />
        <h1 className='text-2xl xl:text-3xl'>Page not Found...</h1>
        <Link to={"/"}><button className='flex text-sm xl:text-base  items-center gap-3 mt-6 hover:bg-violet-600 bg-violet-500 px-2 py-1 rounded-lg cursor-pointer'><IoHome /> Back to Homepage</button></Link>
    </section>
  )
}

export default NotFound