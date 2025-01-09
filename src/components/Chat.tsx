import React, { useState } from "react";
import axios from "axios";
import "./Chat.css";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages([...messages, { user: userMessage, bot: "..." }]);
    setInput("");

    try {
      const response = await axios.post("/api/bot/message", {
        message: userMessage,
      });
      const botMessage = response.data.message;

      setMessages((prevMessages) => {
        const newMessages = [...prevMessages];
        newMessages[newMessages.length - 1].bot = botMessage;
        return newMessages;
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages];
        newMessages[newMessages.length - 1].bot = "Error processing message";
        return newMessages;
      });
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            <div className="chat-message-user">{msg.user}</div>
            <div className="chat-message-bot">{msg.bot}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
