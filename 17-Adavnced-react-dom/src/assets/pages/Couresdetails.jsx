import React from 'react'
import { useParams } from 'react-router-dom'
const Coursesdetails = () => {


    const params = useParams();
  
  return (
    <div>
        <h1>{params.id} Coursesdetails</h1>
    </div>
  )
}

export default Coursesdetails