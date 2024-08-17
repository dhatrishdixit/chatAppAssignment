import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PaperclipIcon, Send, X } from "lucide-react";
import { useRef, useState } from "react";


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
  

export default ChatInputArea;
  