import type { Message } from '@/types';
import { cn, convertMarkdown, formatTime } from '@/supports';

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
            props.message.role === 'assistant' ? '' : 'bg-purple-100',
          )
        }
      >
        <span className="pr-12" dangerouslySetInnerHTML={{ __html: convertMarkdown(props.message.text) }} />
        <span className="text-xs absolute right-1 bottom-1">{formatTime(props.message.timestamp)}</span>
      </div>
    </li>
  );
}
