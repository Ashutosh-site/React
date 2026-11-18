import React, { useEffect, useState } from "react";

const App = () => {

  const [a, seta] = useState(0)

  const [b, setb] = useState(0)

  function achanging() {
    console.log("A ki valure chage ho gyi h");
  }   

   function bchanging() {
    console.log("b ki value chage ho gyi ");
  }

  useEffect(function(){
    bchanging()

  },[b])

  
   return (




  <div>
     <h1>{a}</h1>
     <h1>{b}</h1>
      <button onClick={()=>{
        seta(a+1)
      }}>click chage a</button>

    <button onClick={()=>{
      setb(b-1)

    }}>click to chage b </button>




    </div>
   )
};

export default App;
