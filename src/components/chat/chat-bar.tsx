import type { ComponentProps } from 'react';
import { useRef } from 'react';
import { cn } from '@/supports';
import { ChatInput } from './chat-input';
import { ChatSendButton } from './chat-send-button';

interface ChatBarProps {
  className?: string
  onSend?: (prompt: string) => void
  placeholder?: string
  buttonContent?: React.ReactNode | string
  disabled?: boolean
  Input?: React.FC<ComponentProps<typeof ChatInput>>
  SendButton?: React.FC<ComponentProps<typeof ChatSendButton>>
}

export function ChatBar({
  className,
  onSend,
  placeholder,
  buttonContent,
  disabled,
  Input = ChatInput,
  SendButton = ChatSendButton,
}: ChatBarProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = () => {
    if (textareaRef.current?.value.length) {
      onSend?.(textareaRef.current.value);
      textareaRef.current.value = '';
      textareaRef.current.focus();
    }
  };

  const onKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSubmit();
    }
  };

  return (
    <div className={
      cn(
        'flex gap-2 w-full border border-solid border-neutral-200 rounded focus-within:border-blue-500 focus-within:rounded',
        className,
      )
    }
    >
      <Input
        ref={textareaRef}
        className="outline-none"
        placeholder={placeholder}
        onKeyUp={onKeyUp}
        disabled={disabled}
      />
      <SendButton
        type="submit"
        onClick={handleSubmit}
        disabled={disabled}
      >
        {buttonContent}
      </SendButton>
    </div>
  );
}
