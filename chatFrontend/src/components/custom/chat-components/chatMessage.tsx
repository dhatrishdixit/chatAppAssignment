import React from 'react';


interface chatMessageProps {
    content : String ;
    sender :String ;
}

const ChatMessage = ({ content, sender }:chatMessageProps) => (
  <div className={`max-w-[70%] ${sender === 'user' ? 'ml-auto' : ''} my-2`}>
    <div className={`p-3 rounded-lg ${sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
      {content}
    </div>
  </div>
);

export default ChatMessage;