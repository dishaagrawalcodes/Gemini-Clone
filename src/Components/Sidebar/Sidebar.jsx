import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = ({ onSent }) => {
  console.log(onSent);
  const [extended, setExtended] = useState(false);
  const { setInput, prevPrompt,clearSpecificPrompt, handleRecentPromptClick,newChat } = useContext(Context);
  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={()=>newChat()}className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {Array.isArray(prevPrompt) && prevPrompt.length > 0
              ? prevPrompt.map((item, index) => (
                  <div
                    key={index}
                    className="recent-entry"
                    onClick={() => handleRecentPromptClick(item?.prompt || item)}
                  >
                    <img src={assets.message_icon} alt="message" />
                    
                    <div className="recent-prompt">
    <p>{item?.prompt ? `${item.prompt.slice(0, 18)}...` : "Unknown"}</p>
    <button className="clear-button" onClick={(e) => {
        e.stopPropagation();
        clearSpecificPrompt(item);
    }}>Clear</button>
</div>

                    
                  </div>
                ))
              : null}
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
