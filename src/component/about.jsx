import React from "react";
import AboutImage from '../component/images/aboutImage.jpg'
function About(){
    return(
        <div className="about" id="about">
             <div className="about-image">
                <img src={AboutImage}  />
             </div>
             <div className="about-text">
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil beatae soluta pariatur quidem cumque earum labore totam officiis nesciunt tempora temporibus ex doloremque quia, ab, facere itaque voluptates, reprehenderit recusandae?</p>
                <button>Read More</button>
             </div>
        </div>
    )
}

export default About;