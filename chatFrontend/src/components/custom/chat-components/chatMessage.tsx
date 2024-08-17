
export interface ChatMessageProps {
  content: string;
  sender: 'user' | 'bot';
  files?: string[];
}

const ChatMessage = ({ content, sender, files }:ChatMessageProps) => (
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

export default ChatMessage;