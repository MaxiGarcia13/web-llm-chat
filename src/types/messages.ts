import type { USER_ASSISTANT, USER_ME } from '@/constants';

export interface TextMessage {
  timestamp: number
  text: string
  user: typeof USER_ME | typeof USER_ASSISTANT
};

export type Message = TextMessage;
