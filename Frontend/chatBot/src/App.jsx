import React, { useState } from "react";
import axios from "axios";
import ChatWindow from "./components/ChatWindow";

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    const newMessage = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: text,
      });
      const botMessage = {
        id: Date.now() + 1,
        text: res.data.reply || "No response received.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Error sending message:", err);

      const errorMessage = {
        id: Date.now() + 1,
        text: "❌ Failed to get a response from the server.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="app-container">
      <ChatWindow messages={messages} onSend={handleSendMessage} />
    </div>
  );
};

export default App;
