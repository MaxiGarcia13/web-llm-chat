import type { InitProgressCallback, MLCEngine } from '@mlc-ai/web-llm';
import type { Message, Model } from '@/types';
import { CreateMLCEngine } from '@mlc-ai/web-llm';
import { useState } from 'react';
import { LoadingBar } from '@/components/loading-bar';
import { DEFAULT_SYSTEM_TEMPLATE, MODEL_LIST } from '@/constants';
import { useDebounce } from '@/hooks';
import { cn, getModelForName } from '@/supports';
import { ChatBar } from './chat-bar';
import { ChatMessages } from './chat-messages';
import { ChatModelSelector } from './chat-model-selector';

export function Chat() {
  const [engine, setEngine] = useState<MLCEngine | null>(null);
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [model, setModel] = useState<Model>(() => getModelForName(MODEL_LIST, 'Qwen2.5-1.5B-Instruct-q4f32_1-MLC') ?? MODEL_LIST[0]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modelDownloadProgress, setModelDownloadProgress] = useState<Parameters<InitProgressCallback>[0]>(undefined);
  const isModelDownloaded = (modelDownloadProgress?.progress ?? 0) >= 1;

  async function sendPrompt(prompt: string) {
    const newMessages: Array<Message> = [
      ...messages,
      {
        text: prompt,
        timestamp: new Date().getTime(),
        role: 'user',
      },
    ];

    if (!isModelDownloaded) {
      return initModel(prompt);
    }

    setMessages(() => {
      setIsLoading(true);

      return newMessages;
    });

    if (engine) {
      await engine.chat.completions.create({
        ...model.recommendedConfig,
        messages: [
          {
            role: 'system',
            content: DEFAULT_SYSTEM_TEMPLATE
              .replace('{privder}', model.provider)
              .replace('{{display_name}}', model.displayName)
              .replace('{{time}}', new Date().toLocaleString()),
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
              role: 'assistant',
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

  async function initModel(prompt?: string) {
    const engine = await CreateMLCEngine(
      model.name,
      { initProgressCallback: status => initProgressCallback(status, prompt) },
    );

    setEngine(engine);
  }

  const { debouncedFn: debouncedSendPrompt } = useDebounce(sendPrompt, 100);

  function initProgressCallback(status: Parameters<InitProgressCallback>[0], prompt?: string): ReturnType<InitProgressCallback> {
    setModelDownloadProgress(status);
    if (prompt && status.progress >= 1 && status.text.toLowerCase().includes('finish loading')) {
      debouncedSendPrompt(prompt);
    }
  }

  function handleModelChange(newModel: Model) {
    setModel(newModel);
    setMessages([]);
    setModelDownloadProgress(undefined);
    initModel();
  }

  return (
    <section
      className={
        cn(
          'p-4 w-full h-full border border-solid border-neutral-300 rounded bg-gray-50 flex flex-col overflow-hidden',
        )
      }
    >
      {
        modelDownloadProgress && !isModelDownloaded
        && <LoadingBar progress={modelDownloadProgress?.progress ?? 0}>{modelDownloadProgress?.text}</LoadingBar>
      }

      <ChatMessages
        className="flex-1 mb-4"
        messages={messages}
        loading={isLoading}
      />

      <ChatModelSelector
        className="bg-neutral-200 rounded rounded-b-none"
        model={model}
        models={MODEL_LIST}
        onChange={handleModelChange}
      />
      <ChatBar
        className="rounded-t-none"
        placeholder="Ask anything"
        buttonContent="▶️"
        onSend={debouncedSendPrompt}
      />
      <footer className="flex items-center justify-end mt-4">
        <span className="text-sm">
          By Maximiliano Garcia Mortigliengo
          <a className="text-sm ml-1 text-blue-500" href="https://github.com/MaxiGarcia13/web-llm-chat" target="_blank" rel="noopener noreferrer">
            (repo)
          </a>
        </span>
      </footer>
    </section>
  );
}
