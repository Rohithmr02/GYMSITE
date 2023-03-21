import React from "react";
import Featuresbox from "./Featuresbox";
import image1 from '../component/images/exercise.png';
import image2 from '../component/images/yoga-pose.png';
import image3 from '../component/images/battle-rope.png';
function Features(){
    return(
       <div className="Features" id="feature">
        <div className="heading">
        <h1>FEATURES</h1>
        </div>
        <div className="container">
           <Featuresbox image={image1} name="Wightlifting"/>
           <Featuresbox image={image2} name="Stretches"/>
           <Featuresbox image={image3} name="Amrs workout"/>
        </div>
       </div>
    )
}

export default Features;