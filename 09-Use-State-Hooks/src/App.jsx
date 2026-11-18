import React, { useState } from 'react'

const App = () => {

const [num, update] = useState({user:"Sarthak",age:20})

function change(){
    const newnum ={...num}
    newnum.user ="ankit";
    update(newnum);
}



  return (
    <div>

      <h1>{num.user},{num.age}</h1>
      <button onClick={change}>btn</button>

    </div>
  )
}

export default App