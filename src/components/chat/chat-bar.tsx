import type { ComponentProps } from 'react';
import { useRef } from 'react';
import { cn } from '@/supports';
import { ChatInput } from './chat-input';
import { ChatSendButton } from './chat-send-button';

interface ChatBarProps {
  className?: string
  onSend?: (prompt: string) => void
  placeholder?: string
  buttonText?: string
  disabled?: boolean
  Input?: React.FC<ComponentProps<typeof ChatInput>>
  SendButton?: React.FC<ComponentProps<typeof ChatSendButton>>
}

export function ChatBar({
  className,
  onSend,
  placeholder,
  buttonText,
  disabled,
  Input = ChatInput,
  SendButton = ChatSendButton,
}: ChatBarProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = () => {
    if (textareaRef.current?.value.length) {
      onSend?.(textareaRef.current.value);
      textareaRef.current.value = '';
    }
  };

  const onKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSubmit();
    }
  };

  return (
    <footer className={cn('flex gap-2 w-full border border-solid border-neutral-300 rounded', className)}>
      <Input
        ref={textareaRef}
        placeholder={placeholder}
        onKeyUp={onKeyUp}
        disabled={disabled}
        autoFocus
      />
      <SendButton
        type="submit"
        onClick={handleSubmit}
        disabled={disabled}
      >
        {buttonText}
      </SendButton>
    </footer>
  );
}
