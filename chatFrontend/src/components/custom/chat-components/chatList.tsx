import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import ChatItem from './chatItem';

const ChatList = () => (
  <ScrollArea className="h-[calc(100vh-120px)]">
    <ChatItem name="Claire" message="2nd Hello, I wanted to know more about the product design position opened at Atlassian." days="11" />
    <ChatItem name="Parik" message="3rd Hello, I wanted to know more about the product design position opened at Atlassian." days="11" />
    <ChatItem name="Naina" message="4th Hello, I wanted to know more about the product design position opened at Atlassian." days="11" />
    <ChatItem name="John" message="5th Hello, I wanted to know more about the product design position opened at Atlassian." days="11" />
    <ChatItem name="Kristine" message="4th Hello, I wanted to know more about the product design position opened at Atlassian." days="11" />
    <ChatItem name="John" message="5th Hello, I wanted to know more about the product design position opened at Atlassian." days="11" />
  </ScrollArea>
);

export default ChatList;