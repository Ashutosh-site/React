import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 justify-between flex  flex-col  '>
               <h2 className='bg-amber-50 rounded-full justify-center flex h-14 w-14 items-center text-2xl'>{props.id+1}</h2>
               <div>
                <div className='text-xl leading-normal text-white mb-10' >Lorem ipsum dolor sit amet consectetur adipisicing elit.  voluptatum, velit esse ut nobis minus nemo!</div>

                  <div className='flex justify-between'>
                      <button     style={{background:props.color}}  className=' text-white px-8 py-2  rounded-full '>{props.tag} </button>
                <button  className='bg-blue-500 text-white px-7 py-3  rounded-full '><i className="ri-arrow-right-line"/></button>
                  </div>
               </div>
            </div>
  )
}


export default RightCardContent