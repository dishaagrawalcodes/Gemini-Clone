import React, { useContext,useEffect } from "react";
import "./Main.css";
import { Context } from "../../context/Context";
import { assets } from "../../assets/assets";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  const handleSendClick = (prompt =input) => {
    const finalPrompt = typeof prompt === "string" ? prompt : input; // Ensure it's a string
    if (typeof finalPrompt === "string" && finalPrompt.trim() !== "") { 
      onSent(finalPrompt);
      setInput("");
    }
  };
  
  const handleRecentPromptClick = (prompt) => {
    setInput(prompt);  // Set the clicked prompt as input (optional, if you want to show in input field)
    handleSendClick(prompt);  // Send the clicked prompt
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt=""></img>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            {" "}
            <div className="greet">
              <p>
                <span>Hello,Dev.</span>
              </p>
              <p>How can i help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt=""></img>
              </div>
              <div className="card">
                <p>
                  Where can I see breathtaking sunrises or sunsets during my
                  journey?
                </p>
                <img src={assets.bulb_icon} alt=""></img>
              </div>
              <div className="card">
                <p>
                  What are the best national or state parks to visit along the
                  way?
                </p>
                <img src={assets.message_icon} alt=""></img>
              </div>
              <div className="card">
                <p>
                  Are there any scenic hiking trails or viewpoints near my
                  route?
                </p>
                <img src={assets.code_icon} alt=""></img>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input    value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
              
            {input?<img
                onClick={handleSendClick} // Use handleSendClick to reset input before sending
                src={assets.send_icon}
                alt=""
              />:null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini display inaccurate info,including about people,so double
            check its answers{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
