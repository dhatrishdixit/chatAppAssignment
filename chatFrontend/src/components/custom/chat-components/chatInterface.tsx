import React from 'react';
import SearchBar from './searchBar';
import FilterTabs from './filterTabs';
import ChatList from './chatList';
import ChatArea from './chatArea';

const ChatInterface = () => (
  <div className="flex h-screen">
    <div className="w-1/3 border-r">
      <SearchBar />
      <FilterTabs />
      <ChatList />
    </div>
    <div className="w-2/3">
      <ChatArea />
    </div>
  </div>
);

export default ChatInterface;