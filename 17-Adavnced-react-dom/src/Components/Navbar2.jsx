import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {

    const navigate = useNavigate();

const btnclick = () => {
  navigate("/");
}


const backbtnclick = () => {
  navigate(-1);
}




  return (
    <div>
        <button type="button" onClick={btnclick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 cursor-pointer mt-4 rounded">
        return home page
      </button>


      <button type="button" onClick={backbtnclick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 m-4 cursor-pointer rounded">
        return back page
      </button>

     
       
       
       </div>
  )
}

export default Navbar2