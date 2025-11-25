import type { ChangeEvent } from 'react';
import { useState } from 'react';

interface ChatInputProps {
  className?: string
  onSend?: (prompt: string) => void
  placeholder?: string
}

export function ChatInput(props: ChatInputProps) {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    if (value) {
      props.onSend?.(value);
    }
  };

  return (
    <div>
      <textarea placeholder={props.placeholder} onChange={handleChange} value={value} />
      <button type="submit" onClick={handleSubmit}>Send</button>
    </div>
  );
}
