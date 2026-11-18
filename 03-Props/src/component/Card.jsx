import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
   
        <div className="Card">
                <img src={props.img} alt="profile" />
                <h1>{props.user} {props.age}</h1>
                <p>this is my first react project</p>   
                <button>View Profile</button>
              </div>

  )
}

export default Card