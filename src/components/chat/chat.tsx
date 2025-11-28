import type { InitProgressCallback, MLCEngine } from '@mlc-ai/web-llm';
import type { Message } from '@/types';
import { CreateMLCEngine } from '@mlc-ai/web-llm';
import { useEffect, useState } from 'react';
import { LoadingBar } from '@/components/loading-bar';
import { USER_ASSISTANT, USER_ME } from '@/constants';
import { ChatBar } from './chat-bar';
import { ChatMessages } from './chat-messages';

const defaultModel = 'Qwen2.5-1.5B-Instruct-q4f32_1-MLC';

export function Chat() {
  const [engine, setEngine] = useState<MLCEngine | null>(null);
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modelDownloadProgress, setModelDownloadProgress] = useState<Parameters<InitProgressCallback>[0]>();
  const isModelDownloaded = (modelDownloadProgress?.progress ?? 0) >= 1;

  const sendPrompt = async (prompt: string) => {
    const newMessages: Array<Message> = [
      ...messages,
      {
        text: prompt,
        timestamp: Date.now(),
        user: USER_ME,
      },
    ];

    setMessages(() => {
      setIsLoading(true);

      return newMessages;
    });

    if (engine) {
      await engine.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a helpful AI assistant.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
      });

      engine.getMessage()
        .then((answer) => {
          setMessages([
            ...newMessages,
            {
              text: answer,
              timestamp: Date.now(),
              user: USER_ASSISTANT,
            },
          ]);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  function initProgressCallback(status: Parameters<InitProgressCallback>[0]): ReturnType<InitProgressCallback> {
    setModelDownloadProgress(status);
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
    <section className="p-4 w-full h-full border border-solid border-neutral-300 rounded bg-gray-50 flex flex-col overflow-hidden">
      {
        !isModelDownloaded
        && <LoadingBar progress={modelDownloadProgress?.progress ?? 0}>{modelDownloadProgress?.text}</LoadingBar>
      }

      <ChatMessages
        className="flex-1"
        messages={messages}
        loading={isLoading}
      />
      <ChatBar
        className="mt-4"
        placeholder="Ask anything"
        buttonText="Ask"
        onSend={sendPrompt}
        disabled={!isModelDownloaded}
      />
    </section>
  );
}
