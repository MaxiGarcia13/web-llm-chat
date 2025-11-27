import { cn } from '@/supports';

interface ChatSendButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: HTMLButtonElement['type']
  disabled?: boolean
}

export function ChatSendButton(props: ChatSendButtonProps) {
  return (
    <button
      type={props.type || 'button'}
      {...props}
      className={cn('px-4', props.className, props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer')}
    >
      {props.children}
    </button>
  );
}
