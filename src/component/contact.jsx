import React from "react";

function Contact(){
    const submit=()=>{
        alert("submitted!")
    }
    return(
        <div className="contact" id="contact">
            <h1>CONTACT US</h1>
            <form action="">
                <input type="text" placeholder="Full Name" required/>
                <input type="email" placeholder="Enter your Email" required/>
                <textarea placeholder="Write Here....." name="message"></textarea>
                <input type="submit" onClick={submit} value='SEND' id="submit" />
            </form>
        </div>
    )
}

export default Contact;