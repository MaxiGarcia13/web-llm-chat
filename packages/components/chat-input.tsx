import type { FormEvent } from 'react';
import { useRef } from 'react';

interface ChatInputProps {
  className?: string
  onSend?: (prompt: string) => void
  placeholder?: string
}

export function ChatInput(props: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (textareaRef.current?.value) {
      props.onSend?.(textareaRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="prompt" ref={textareaRef} placeholder={props.placeholder} />
      <button type="submit">Send</button>
    </form>
  );
}
