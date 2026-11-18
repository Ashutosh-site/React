import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { PostDataContext } from '../Context/Themecontext'

const Navbar = (props) => {


  const data = useContext(PostDataContext)

  console.log(data);
  
  return (
    <div className='nav'>
        <h4>{data}</h4>  
        <Nav2 theme={props.theme} />  
       </div>
  )
}

export default Navbar