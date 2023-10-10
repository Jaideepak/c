import React from "react";

import BotAvatar from "./icons/bot.svg";

const LMSBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div
        className="react-chatbot-kit-chat-bot-avatar-container"
        style={{ background: "none", width: "-500px", minHeight: "-50px" }}
      >
        <img alt="BotAvatar" src={BotAvatar} />
      </div>
    </div>
  );
};

export default LMSBotAvatar;
