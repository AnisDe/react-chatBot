import React from "react";

const ChatMessages = ({ messages }) => {
  return (
    <div className="chat-messages">
      {messages.length === 0 ? (
        <p className="placeholder">
          Start chatting with your React assistant...
        </p>
      ) : (
        messages.map((msg) => (
          <div
            key={msg.id}
            className={`message-bubble ${
              msg.sender === "user" ? "user" : "bot"
            }`}
          >
            {msg.text}
          </div>
        ))
      )}
    </div>
  );
};

export default ChatMessages;
