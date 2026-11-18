import React from 'react'
import RightCard from './RightCard'

const Rightcontent = (props) => {
  console.log(props)
  return (
    <div  id='right' className='h-full w-2/3 p-6 flex  flex-nowrap gap-10 overflow-x-auto'>
        {props.users.map(function(elem,idx){
          return <RightCard key={idx}  id={idx} img={elem.img}  tag={elem.tag}   color={elem.color} />
        })}
      </div>
  )
}

export default Rightcontent