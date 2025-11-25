import { ChatInput } from './chat-input';
import { ChatMessages } from './chat-messages';

export function Chat() {
  const sendPrompt = (prompt: string) => {
    console.warn('Message sent!', prompt);
  };

  return (
    <section>
      <ChatMessages />
      <ChatInput placeholder="send a message" onSend={sendPrompt} />
    </section>
  );
}
