import React from 'react'
import Rightcontent from './Rightcontent'
import LeftContent from './LeftContent'

const Page1Content = (props) => {
  return (
     <div className='py-3 px-18 flex gap-10 h-[90vh] items-center '>
      
        <LeftContent/>

      <Rightcontent  users={props.users}/>

    </div>
  )
}

export default Page1Content