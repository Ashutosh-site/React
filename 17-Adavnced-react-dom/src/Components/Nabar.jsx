import React from 'react'
import { Link } from 'react-router-dom'

const Nabar = () => {
  return (
          <div className='flex  justify-between items-center p-5 bg-[#ffc2c2] text-black'>
            <h2 className='font-serif font-bold italic text-xl'>Filerise</h2>
            <div className='flex gap-8'>
              <Link className='font-serif font-bold text-xl' to='/'>Home</Link>
              <Link className='font-serif font-bold text-xl' to='/Product'>Product</Link>
              <Link className='font-serif font-bold text-xl' to='/Contact'>Contact</Link>
              <Link className='font-serif font-bold text-xl' to='/Courses'>Courses</Link>
            </div>
        </div>
  )
}

export default Nabar