import React, { useState } from "react";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import SendButton from "./SendButton";
import "./chat.css";

const ChatWindow = ({ messages, onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    onSend(input);
    setInput("");
  };

  return (
    <div className="chat-window">
      <ChatMessages messages={messages} />
      <div className="chat-input-container">
        <ChatInput value={input} onChange={setInput} onEnter={handleSend} />
        <SendButton onClick={handleSend} />
      </div>
    </div>
  );
};

export default ChatWindow;
