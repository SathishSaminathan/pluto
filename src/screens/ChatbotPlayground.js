import React from "react";

const ChatbotPlayground = () => {
  return (
    <div className="chatContainer">
      <iframe
        className="input"
        src={
          "https://rounds-edge.bitbucket.io/chat-bot/"
        }
      ></iframe>
      <iframe
        className="output"
        src={
          "https://rounds-edge.bitbucket.io/tts/example.html"
        }
      ></iframe>
    </div>
  );
};

export default ChatbotPlayground;
