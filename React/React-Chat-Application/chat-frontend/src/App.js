import { useEffect, useState } from "react";
import "./App.css";
import io, { Socket } from "socket.io-client";

const socket = io("http://localhost:4000");

function App() {
  const [inputMessage, setInputMessage] = useState();
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessage([...messages, message]);
    });
  }, [messages]);

  function handleSendMessage() {
    socket.emit("message", inputMessage);
    setInputMessage("");
  }

  return (
    <div className="App">
      <h1>Chat Application</h1>
      <div className="message">
        {messages?.map((message) => {
          return <div className="message">{message}</div>;
        })}
      </div>
      <div className="chat-container">
        <div className="input-container">
          <input
            type="text"
            value={inputMessage}
            placeholder="Enter Your Message...."
            onChange={(e) => {
              setInputMessage(e.target.value);
            }}
          />
          <button onClick={handleSendMessage}>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default App;
