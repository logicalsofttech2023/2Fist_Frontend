import React from "react";
import { useNavigate } from 'react-router-dom';


const ChatwithUs = () => {
  const navigate = useNavigate();

  const chatwithus = () => {
    navigate('/GamersLiveChatting');
  };
  return (
    <>
      <div className="chat-button-container" onClick={chatwithus}>
        <button className="chat-button">Chat with Us</button>
      </div>
    </>
  );
};

export default ChatwithUs;
