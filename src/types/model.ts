import type { ChatCompletionRequestBase } from '@mlc-ai/web-llm';

export interface Model {
  name: string
  displayName: string
  provider: string
  recommendedConfig: Pick<ChatCompletionRequestBase, 'temperature' | 'presence_penalty' | 'frequency_penalty' | 'top_p'>
}
