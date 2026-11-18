import React from "react";
import Section1 from "./Components/Section1/Section1";


const App = () => {
  const  users = [
    {
      img:'https://i.pinimg.com/736x/70/5f/f5/705ff5cfc094ebf327de3233211cf560.jpg',
      intr:'',
      color:'red',
      tag:'Satisfied',
    },
    { 
       img:'https://i.pinimg.com/736x/aa/93/80/aa93809f66902c8f53f47400f23f4992.jpg',
      intr:'',
       color:'blue',
      tag:'Underserved',
    },
    {
       img:'https://i.pinimg.com/736x/d0/48/88/d0488846a59670fac86d8babf46c9ca6.jpg',
       color:'cyan',
      intr:'',
      tag:'Underbanked',
    },
  ]
  return (
    <div>
      <Section1  users={users}/>
    </div>
  );
};

export default App;
