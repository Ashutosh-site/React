import React from "react";
import Card from "./component/Card";

const App = () => {
   
  return (
    <>
      <div className="Parent">
        <Card user='ANAM' age={30} img ="https://i.pinimg.com/736x/84/d4/7f/84d47f11cd92ef7487b5b4c55e8c0c44.jpg" />
        <Card user='Ankit' age={25} img ="https://i.pinimg.com/736x/c3/af/ac/c3afac9bf2c8072c59f44cb322a4df98.jpg" />
      </div>
    </>
  );
};

export default App;
