import type { TextareaHTMLAttributes } from 'react';
import { cn } from '@/supports';

interface ChatInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref?: React.Ref<HTMLTextAreaElement>
  disabled?: boolean
}

export function ChatInput(props: ChatInputProps) {
  return (
    <textarea
      name="prompt-input"
      {...props}
      className={cn('field-sizing-content h-full w-full max-h-[300px] min-h-[50px] resize-none p-4', props.className)}
    />
  );
}
