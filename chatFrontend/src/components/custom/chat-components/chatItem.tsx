import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface chatItemProps {
    name: string ;
    message:string ;
    days:string
}

const ChatItem = ({ name, message, days }:chatItemProps) => (
  <div className="flex items-center space-x-4 p-2 hover:bg-secondary">
    <Avatar>
      <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${name}`} />
      <AvatarFallback>{name[0]}</AvatarFallback>
    </Avatar>
    <div className="flex-grow">
      <div className="flex justify-between">
        <span className="font-semibold">{name}</span>
        {days && <span className="text-sm text-muted-foreground">{days} days</span>}
      </div>
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  </div>
);



export default ChatItem;