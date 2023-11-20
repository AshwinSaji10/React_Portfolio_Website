import React from "react";
import welcome_img from './images/mountain_bw.jpg'

function Home()
{
    return(
        <div className="Page">
            <div className="Msg1">
                <div className="welcome-img">
                    <img src={welcome_img} alt="welcome_img"/>
                </div>
                <div className="welcome-msg">
                    <h1>Welcome to Ashwin's Portfolio Website!</h1>
                    <p> Hi there,I am Ashwin Saji, an Aspiring software developer
                    </p>
                </div>       
            </div>
            <div className="Msg2">
                <h1>Latest code</h1>
            </div>
        </div>
    );
};


export default Home;