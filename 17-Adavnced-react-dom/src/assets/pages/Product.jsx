import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex  gap-4  justify-center py-4 text-xl font-bold'>
            <Link to ='/Product/Man'>Man collection</Link>
            <Link to ='/Product/Women'>Women collection</Link>
        </div>
           <Outlet/>
    </div>
  )
} 

export default Product