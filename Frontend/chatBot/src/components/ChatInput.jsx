import React from "react";

const ChatInput = ({ value, onChange, onEnter }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onEnter();
  };

  return (
    <input
      className="chat-input"
      type="text"
      placeholder="Ask me about React..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default ChatInput;
