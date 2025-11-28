import type { Message } from '@/types';
import { cn, formatTime } from '@/supports';

interface ChatMessageProps extends React.HTMLAttributes<HTMLLIElement> {
  message: Message
}

export function ChatMessage(props: ChatMessageProps) {
  return (
    <li
      {...props}
      className={
        cn(
          'w-full flex',
          props.className,
          props.message.role === 'assistant' ? 'justify-start' : 'justify-end',
        )
      }
    >
      <div
        className={
          cn(
            'p-4 rounded text-neutral-900 flex flex-col items-end group relative',
            props.message.role === 'assistant' ? '' : 'bg-purple-200',
          )
        }
      >
        <span className="pr-12">{props.message.text}</span>
        <span className="text-xs hidden group-hover:block absolute right-1 bottom-1">{formatTime(props.message.timestamp)}</span>
      </div>
    </li>
  );
}
