import type { Message } from '@/types';
import { useEffect, useRef } from 'react';
import { cn } from '@/supports';
import { ChatMessage } from './chat-message';

interface ChatMessagesProps {
  messages: Array<Message>
  loading: boolean
  className?: string
}

export function ChatMessages(props: ChatMessagesProps) {
  const litRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    litRef.current?.scrollTo({ top: litRef.current.scrollHeight, behavior: 'smooth' });
  }, [props.messages]);

  return (
    <ul ref={litRef} className={cn('transition-all w-full h-full flex flex-col gap-4 overflow-y-auto p-2', props.className)}>
      {props.messages.map(message => (
        <ChatMessage key={message.timestamp} message={message} />
      ))}

      {props.loading && <li>Thinking...</li>}
    </ul>
  );
}
