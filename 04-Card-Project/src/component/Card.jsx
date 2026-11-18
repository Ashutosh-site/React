import React from 'react'
import { Bookmark } from "lucide-react";
const Card = (props) => {

  console.log(props.companyname);


  return (
      <div className="Card">
        <div className="top">
          <img
            src={props.brandLogo}
            alt="profile"
          />
          <button>
            save <Bookmark size={15} />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.companyname}<span>{props.datePosted}</span>
          </h3>
          <h2>{props.post}</h2>
          <div className="tags">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button className="apply">Apply Now</button>
        </div>
      </div> 
  )
}

export default Card