import type { InitProgressCallback, MLCEngine } from '@mlc-ai/web-llm';
import type { Message, Model } from '@/types';
import { CreateMLCEngine } from '@mlc-ai/web-llm';
import { useState } from 'react';
import { LoadingBar } from '@/components/loading-bar';
import { DEFAULT_ASSISTANT_TEMPLATE, DEFAULT_SYSTEM_TEMPLATE, MODEL_LIST } from '@/constants';
import { useDebounce } from '@/hooks';
import { cn, getModelForName } from '@/supports';
import { Img } from '../img';
import { ChatBar } from './chat-bar';
import { ChatMessages } from './chat-messages';
import { ChatModelSelector } from './chat-model-selector';
import { ChatNoMessages } from './chat-no-messages';

export function Chat() {
  const [engine, setEngine] = useState<MLCEngine | null>(null);
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [model, setModel] = useState<Model>(() => getModelForName(MODEL_LIST, 'Qwen2.5-1.5B-Instruct-q4f32_1-MLC') ?? MODEL_LIST[0]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modelDownloadProgress, setModelDownloadProgress] = useState<Parameters<InitProgressCallback>[0] | undefined>(undefined);
  const isModelDownloaded = (modelDownloadProgress?.progress ?? 0) >= 1;

  function sendPrompt(prompt: string) {
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

    talkToLLM(prompt, newMessages);
  };

  async function talkToLLM(prompt: string, messages: Message[]) {
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
            role: 'assistant',
            content: DEFAULT_ASSISTANT_TEMPLATE,
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
            ...messages,
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
  }

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
          'group p-4 w-full h-full rounded bg-amber-50 flex flex-col overflow-hidden',
        )
      }
    >
      {
        modelDownloadProgress && !isModelDownloaded
        && <LoadingBar progress={modelDownloadProgress?.progress ?? 0}>{modelDownloadProgress?.text}</LoadingBar>
      }

      {
        messages.length > 0
          ? <ChatMessages className="flex-1 mb-4" messages={messages} loading={isLoading} />
          : <ChatNoMessages className="flex-1" />
      }

      <ChatModelSelector
        className="bg-amber-300 rounded rounded-b-none group-focus-within:bg-purple-700 group-focus-within:text-neutral-200"
        model={model}
        models={MODEL_LIST}
        onChange={handleModelChange}
      />

      <ChatBar
        className="rounded-t-none border-2 border-solid border-amber-300 rounded group-focus-within:border-purple-700"
        placeholder="Ask anything"
        buttonContent={<Img src="/img/send.png" alt="Send" className="h-5 w-5" />}
        disabled={isLoading}
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
