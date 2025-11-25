import type { MLCEngine } from '@mlc-ai/web-llm';
import { CreateMLCEngine } from '@mlc-ai/web-llm';
import { useEffect, useState } from 'react';
import { ChatInput } from './chat-input';
import { ChatMessages } from './chat-messages';

const defaultModel = 'Qwen2.5-1.5B-Instruct-q4f32_1-MLC';

export function Chat() {
  const [engine, setEngine] = useState<MLCEngine | null>(null);

  const sendPrompt = async (prompt: string) => {
    const messages = [
      {
        role: 'system',
        content: 'You are a helpful AI assistant.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ];

    if (engine) {
      await engine.chat.completions.create({
        messages,
      });

      console.warn(await engine.getMessage());
    }
  };

  function initProgressCallback(initProgress) {
    console.warn(initProgress);
  }

  async function init() {
    const engine = await CreateMLCEngine(
      defaultModel,
      { initProgressCallback },
    );

    setEngine(engine);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    init();
  }, []);

  return (
    <section>
      <ChatMessages />
      <ChatInput placeholder="send a message" onSend={sendPrompt} />
    </section>
  );
}
