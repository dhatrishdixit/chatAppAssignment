import { ScrollArea } from "@/components/ui/scroll-area";
import ChatHeader from "./chatHeader";
import { useState } from "react";
import ChatMessage, { ChatMessageProps } from "./chatMessage";
import ChatInputArea from "./chatInput";

const ChatArea = () => {
  const [messages, setMessages] = useState<ChatMessageProps[]>([
    { content: "Hello, i wanted to know more about the product design position opened at Atlassian", sender: "user" },
    { content: "Sure, tell us. what do you wanna know?", sender: "bot" },
    { content: "Take this part of your letter seriously because it's likely one of your first genuine opportunities to make a personal, positive impression on a prospective employer. You want your words to invite them to keep reading and to convey exactly why you're the best choice for their open position. Review your language to ensure it's concise and informative. If you're applying to multiple positions, take great care to edit your letter so that the first paragraph is personal and relevant to the exact position you want.", sender: "bot" },
    { content: "You've a good folio", sender: "bot" },
    { content: "However we're looking for someone with a little more experience!", sender: "bot" },
  ]);

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <ChatHeader />
      <ScrollArea className="flex-grow px-4 py-2">
        {messages.map((msg, index) => (
          <ChatMessage key={index} {...msg} />
        ))}
      </ScrollArea>
      <ChatInputArea />
    </div>
  );
};

export default ChatArea;