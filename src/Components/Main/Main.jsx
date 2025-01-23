import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    
      <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt=""></img>
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello,Dev.</span></p>
                <p>How can i help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt=""></img>
                </div>
                <div className="card">
                    <p>Where can I see breathtaking sunrises or sunsets during my journey?
                    </p>
                    <img src={assets.bulb_icon} alt=""></img>
                </div>
                <div className="card">
                    <p>What are the best national or state parks to visit along the way?
                    </p>
                    <img src={assets.message_icon} alt=""></img>
                </div>
                <div className="card">
                    <p>Are there any scenic hiking trails or viewpoints near my route?
                    </p>
                    <img src={assets.code_icon} alt=""></img>
                </div>
               
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">Gemini display inaccurate info,including about people,so double check its answers </p>
            </div>
        </div>
      </div>
   
  )
}

export default Main
