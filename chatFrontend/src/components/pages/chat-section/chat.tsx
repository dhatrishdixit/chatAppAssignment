import React, { useState, useRef } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

import { Search, Send, PaperclipIcon, X } from 'lucide-react'
import SearchBar from '@/components/custom/chat-components/searchBar'
import FilterTabs from '@/components/custom/chat-components/filterTabs'
import ChatList from '@/components/custom/chat-components/chatList'
import ChatArea from '@/components/custom/chat-components/chatArea'












function Chat() {
  return (
    <div className="flex h-[calc(100vh-64px)]">
      <div className="w-1/3 border-r">
        <SearchBar />
        <FilterTabs />
        <ChatList />
      </div>
      <div className="w-2/3">
        <ChatArea />
      </div>
    </div>
  )
}

export default Chat