import React from "react";

function Featuresbox(props){
    return(
        <div className="a-box">
          <div className="a-img">
           <img src={props.image}/>
          </div>
          <div className="text">
            <h2>{props.name}</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
    )
}

export default Featuresbox;