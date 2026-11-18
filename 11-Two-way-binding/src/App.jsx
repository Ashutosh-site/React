import React, { useState } from 'react'

const App = () => {

  const [title, titleupdate] = useState("")

  const submitfrom = (e)=>{
    e.preventDefault();
    console.log("from submited by",title)
    titleupdate("")
  }

  return (  
    <div>
      
       <form onSubmit={submitfrom}> 
        <input type='text'
         placeholder='enter '
         value={title}
         onChange={(e)=>{
          titleupdate(e.target.value)
         }}
         >
        
        </input>
        <button>Submit</button>
       </form>

    </div>
  )
}

export default App