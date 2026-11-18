import React from 'react'

const App = () => {

  const submitfrom = (e)=>{
    e.preventDefault();
    console.log("from submited")
  }



  return (  
    <div>
      
       <form onSubmit={submitfrom}> 
        <input type='text' placeholder='enter '></input>
        <button>Submit</button>
       </form>

    </div>
  )
}

export default App