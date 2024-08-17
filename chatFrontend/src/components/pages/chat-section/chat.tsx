import React, { useState, useRef } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Send, PaperclipIcon, X } from 'lucide-react'

interface ChatItemProps {
  name: string;
  message: string;
  days?: string;
}

interface ChatMessageProps {
  content: string;
  sender: 'user' | 'bot';
  files?: string[];
}

const SearchBar = () => (
  <div className="p-2 relative">
    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
    <Input type="search" placeholder="Search" className="w-full pl-10 border rounded-full" />
  </div>
);

const FilterTabs = () => (
  <div className="flex space-x-2 p-2">
    {['All', 'Unread', 'Archived', 'Blocked'].map((tab) => (
      <Button 
        key={tab} 
        variant={tab === 'All' ? 'default' : 'ghost'}
        className={`text-sm rounded-full ${tab === 'All' ? 'bg-primary text-primary-foreground' : ''}`}
      >
        {tab}
      </Button>
    ))}
  </div>
);

const ChatItem: React.FC<ChatItemProps> = ({ name, message, days }) => (
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

const ChatList = () => (
  <ScrollArea className="h-[calc(100vh-180px)]">
    <ChatItem name="Claire" message="2nd Hello, I wanted to know more about the product design position opened at Atlassian." />
    <ChatItem name="Parik" message="3rd Hello, I wanted to know more about the product design position opened at Atlassian." days="11" />
    <ChatItem name="Naina" message="4th Hello, I wanted to know more about the product design position opened at Atlassian." days="11" />
    <ChatItem name="John" message="5th Hello, I wanted to know more about the product design position opened at Atlassian." days="11" />
    <ChatItem name="Kristine" message="4th Hello, I wanted to know more about the product design position opened at Atlassian." days="11" />
    <ChatItem name="John" message="5th Hello, I wanted to know more about the product design position opened at Atlassian." days="11" />
  </ScrollArea>
);

const ChatHeader = () => (
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
);

const ChatMessage: React.FC<ChatMessageProps> = ({ content, sender, files }) => (
  <div className={`max-w-[70%] ${sender === 'user' ? 'ml-auto' : ''} my-2`}>
    <div className={`p-3 rounded-lg ${sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
      {content}
      {files && files.length > 0 && (
        <div className="mt-2">
          {files.map((file, index) => (
            <div key={index} className="text-sm underline">
              <a href={file} target="_blank" rel="noopener noreferrer">Attachment {index + 1}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const FilePreview = ({ files, onRemove }: { files: File[], onRemove: (index: number) => void }) => (
  <div className="mt-2 space-y-1">
    {files.map((file, index) => (
      <div key={index} className="flex items-center justify-between text-sm text-muted-foreground bg-secondary p-1 rounded">
        <span>{file.name} ({(file.size / 1024).toFixed(2)} KB)</span>
        <Button variant="ghost" size="sm" onClick={() => onRemove(index)}>
          <X size={14} />
        </Button>
      </div>
    ))}
  </div>
);

const ChatInputArea = () => {
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = () => {
    if (message.trim() || files.length > 0) {
      console.log('Sending message:', message);
      console.log('Attached files:', files);
      setMessage('');
      setFiles([]);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(prevFiles => [...prevFiles, ...Array.from(event.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 border-t">
      <div className="flex items-center space-x-2">
        <Input 
          placeholder="Type your message here" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow border rounded-full"
        />
        <Button 
          onClick={() => fileInputRef.current?.click()} 
          variant="outline" 
          size="icon"
          className="rounded-lg"
        >
          <PaperclipIcon className="text-muted-foreground" size={18} />
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
        <Button onClick={handleSendMessage} size="icon" className="rounded-lg bg-primary text-primary-foreground">
          <Send size={18} />
        </Button>
      </div>
      {files.length > 0 && <FilePreview files={files} onRemove={removeFile} />}
    </div>
  );
};

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
      <ScrollArea className="flex-grow p-4">
        {messages.map((msg, index) => (
          <ChatMessage key={index} {...msg} />
        ))}
      </ScrollArea>
      <ChatInputArea />
    </div>
  );
};

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