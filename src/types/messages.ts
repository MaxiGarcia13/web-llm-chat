import type { ChatCompletionMessageParam } from '@mlc-ai/web-llm';

export interface TextMessage extends Pick<ChatCompletionMessageParam, 'role'> {
  timestamp: number
  text: string
};

export type Message = TextMessage;
