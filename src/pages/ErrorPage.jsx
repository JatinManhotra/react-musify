import React from 'react'
import {error} from '../assets/assets'
import { IoHome } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { MdOutlineRefresh } from 'react-icons/md'

const ErrorPage = () => {
  return (
     <section className='text-white w-full mt-6 items-center flex flex-col'>
        <img className='mx-auto w-[15rem] xl:w-[25rem]' src={error} alt="Not Found Img" />
        <h1 className='text-xl text-center xl:text-3xl'>An error occurred,<br className='block xl:hidden'/> Please <span className='text-rose-500'>refresh</span> the page...</h1>
        <button onClick={()=>location.reload()} className='flex text-sm xl:text-lg  items-center gap-3 mt-6 hover:bg-rose-600 bg-rose-500 px-2 py-1 rounded-lg cursor-pointer'><MdOutlineRefresh /> Refresh</button>
    </section>
  )
}

export default ErrorPage