import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { UserActionDropdown } from './userActionDropDown';

const ChatHeader = () => {
  const onStatusChange = () =>{
    // handle status change logic here
  }
  return (
    <div className='flex items-center justify-end'>
    <div className="flex items-center space-x-4 p-4 border-b h-16">
      <Avatar>
        <AvatarImage src="https://api.dicebear.com/6.x/initials/svg?seed=Kristine" />
        <AvatarFallback>K</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="font-semibold">Kristine</h2>
        <p className="text-sm text-muted-foreground">Typing...</p>
      </div>
    </div>
    <div>
      {/* this is currently hard coded */}
       <UserActionDropdown status="normal" onStatusChange={onStatusChange}/>
    </div>
    </div>
  );
}

export default ChatHeader;