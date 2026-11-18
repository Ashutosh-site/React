import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

   const [img, setImg] = useState([]);

  const getdata = async ()=>{
    
    const respos  = await axios.get("https://picsum.photos/v2/list");

     console.log(respos)

     setImg(respos.data)
   

    
  }


  return (
    <div>

        <button onClick={getdata} className="bg-red-500 rounded-2xl p-4 m-10">get data</button>
        <div>
          
        </div>
        {img.map(function(){

            return <h3>hello</h3>

        })}       
   
      </div>
  )
}

export default App