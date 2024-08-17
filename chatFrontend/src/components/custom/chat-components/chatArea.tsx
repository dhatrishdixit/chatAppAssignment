import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import ChatHeader from './chatHeader';
import ChatMessage from './chatMessage';

const ChatArea = () => (
  <div className="flex flex-col h-full">
    <ChatHeader />
    <ScrollArea className="flex-grow p-4">
      <ChatMessage content="Hello, i wanted to know more about the product design position opened at Atlassian" sender="user" />
      <ChatMessage content="Sure, tell us. what do you wanna know?" sender="bot" />
      <ChatMessage content="Take this part of your letter seriously because it's likely one of your first genuine opportunities to make a personal, positive impression on a prospective employer. You want your words to invite them to keep reading and to convey exactly why you're the best choice for their open position. Review your language to ensure it's concise and informative. If you're applying to multiple positions, take great care to edit your letter so that the first paragraph is personal and relevant to the exact position you want." sender="bot" />
      <ChatMessage content="You've a good folio" sender="bot" />
      <ChatMessage content="However we're looking for someone with a little more experience!" sender="bot" />
    </ScrollArea>
    <div className="p-4 border-t">
      <Input placeholder="Type your message here" className="w-full" />
    </div>
  </div>
);

export default ChatArea;