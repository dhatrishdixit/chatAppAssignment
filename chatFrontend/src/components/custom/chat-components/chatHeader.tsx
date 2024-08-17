import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const ChatHeader = () => (
  <div className="flex items-center space-x-4 p-4 border-b">
    <Avatar>
      <AvatarImage src="https://api.dicebear.com/6.x/initials/svg?seed=Kristine" />
      <AvatarFallback>K</AvatarFallback>
    </Avatar>
    <div>
      <h2 className="font-semibold">Kristine</h2>
      <p className="text-sm text-muted-foreground">Typing...</p>
    </div>
  </div>
);

export default ChatHeader;