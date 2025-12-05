import type { Model } from '@/types';

const QWEN_COMMON_CONFIGS = {
  displayName: 'Qwen',
  provider: 'Alibaba',
  recommendedConfig: {
    temperature: 0.7,
    presence_penalty: 0,
    frequency_penalty: 0,
    top_p: 0.8,
  },
};

const PHI_COMMON_CONFIGS = {
  displayName: 'Phi',
  provider: 'Microsoft',
  recommendedConfig: {
    temperature: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
    top_p: 1,
  },
};

const LLAMA_COMMON_CONFIGS = {
  displayName: 'Llama',
  provider: 'Meta',
  recommendedConfig: {
    temperature: 0.6,
    presence_penalty: 0,
    frequency_penalty: 0,
    top_p: 0.9,
  },
};

const DEEP_SEEK_COMMON_CONFIGS = {
  displayName: 'DeepSeek',
  provider: 'DeepSeek',
  recommendedConfig: {
    temperature: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
    top_p: 1,
  },
};

const TINY_LLAMA_COMMON_CONFIGS = {
  displayName: 'TinyLlama',
  provider: 'Zhang Peiyuan',
  recommendedConfig: {
    temperature: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
    top_p: 1,
  },
};

export const DEFAULT_MODEL = 'Qwen2.5-1.5B-Instruct-q4f32_1-MLC';

export const MODEL_LIST: Array<Model> = [
  // Phi-3.5 Vision
  {
    ...PHI_COMMON_CONFIGS,
    name: 'Phi-3.5-vision-instruct-q4f32_1-MLC',
  },
  {
    ...PHI_COMMON_CONFIGS,
    name: 'Phi-3.5-vision-instruct-q4f16_1-MLC',
  },
  // Llama-3.2
  {
    ...LLAMA_COMMON_CONFIGS,
    name: 'Llama-3.2-1B-Instruct-q4f32_1-MLC',
  },
  {
    ...LLAMA_COMMON_CONFIGS,
    name: 'Llama-3.2-1B-Instruct-q4f16_1-MLC',
  },
  {
    ...LLAMA_COMMON_CONFIGS,
    name: 'Llama-3.2-1B-Instruct-q0f32-MLC',
  },
  {
    ...LLAMA_COMMON_CONFIGS,
    name: 'Llama-3.2-1B-Instruct-q0f16-MLC',
  },
  {
    ...LLAMA_COMMON_CONFIGS,
    name: 'Llama-3.2-3B-Instruct-q4f32_1-MLC',
  },
  {
    ...LLAMA_COMMON_CONFIGS,
    name: 'Llama-3.2-3B-Instruct-q4f16_1-MLC',
  },
  // Llama-3.1 8B
  {
    ...LLAMA_COMMON_CONFIGS,
    name: 'Llama-3.1-8B-Instruct-q4f32_1-MLC-1k',
  },
  {
    ...LLAMA_COMMON_CONFIGS,
    name: 'Llama-3.1-8B-Instruct-q4f16_1-MLC-1k',
  },
  {
    ...LLAMA_COMMON_CONFIGS,
    name: 'Llama-3.1-8B-Instruct-q4f32_1-MLC',
  },
  {
    ...LLAMA_COMMON_CONFIGS,
    name: 'Llama-3.1-8B-Instruct-q4f16_1-MLC',
  },
  // Deepseek
  {
    name: 'DeepSeek-R1-Distill-Qwen-7B-q4f16_1-MLC',
    displayName: 'DeepSeek',
    provider: 'DeepSeek',
    recommendedConfig: {
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
    },
  },
  {
    ...DEEP_SEEK_COMMON_CONFIGS,
    name: 'DeepSeek-R1-Distill-Qwen-7B-q4f32_1-MLC',
  },
  {
    ...DEEP_SEEK_COMMON_CONFIGS,
    name: 'DeepSeek-R1-Distill-Llama-8B-q4f32_1-MLC',
  },
  {
    ...DEEP_SEEK_COMMON_CONFIGS,
    name: 'DeepSeek-R1-Distill-Llama-8B-q4f16_1-MLC',
  },
  // Phi
  {
    ...PHI_COMMON_CONFIGS,
    name: 'Phi-3.5-mini-instruct-q4f16_1-MLC',
  },
  {
    ...PHI_COMMON_CONFIGS,
    name: 'Phi-3.5-mini-instruct-q4f32_1-MLC',
  },
  {
    ...PHI_COMMON_CONFIGS,
    name: 'Phi-3.5-mini-instruct-q4f16_1-MLC-1k',
  },
  {
    ...PHI_COMMON_CONFIGS,
    name: 'Phi-3.5-mini-instruct-q4f32_1-MLC-1k',
  },
  // Qwen3
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen3-0.6B-q4f16_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen3-0.6B-q4f32_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen3-0.6B-q0f16-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen3-0.6B-q0f32-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen3-1.7B-q4f16_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen3-1.7B-q4f32_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen3-4B-q4f16_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen3-4B-q4f32_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen3-8B-q4f16_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen3-8B-q4f32_1-MLC',
  },
  // Qwen2.5
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-0.5B-Instruct-q4f16_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-0.5B-Instruct-q4f32_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-0.5B-Instruct-q0f16-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-0.5B-Instruct-q0f32-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-1.5B-Instruct-q4f16_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-1.5B-Instruct-q4f32_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-3B-Instruct-q4f16_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-3B-Instruct-q4f32_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-7B-Instruct-q4f16_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-7B-Instruct-q4f32_1-MLC',
  },
  // Qwen2.5-Coder
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-Coder-0.5B-Instruct-q4f16_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-Coder-0.5B-Instruct-q4f32_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-Coder-0.5B-Instruct-q0f16-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-Coder-0.5B-Instruct-q0f32-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-Coder-1.5B-Instruct-q4f16_1-MLC',
    recommendedConfig: {
      temperature: 1.0,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1.0,
    },
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-Coder-1.5B-Instruct-q4f32_1-MLC',
    recommendedConfig: {
      temperature: 1.0,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1.0,
    },
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-Coder-3B-Instruct-q4f16_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-Coder-3B-Instruct-q4f32_1-MLC',
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-Coder-7B-Instruct-q4f16_1-MLC',
    recommendedConfig: {
      temperature: 1.0,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1.0,
    },
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2.5-Coder-7B-Instruct-q4f32_1-MLC',
    recommendedConfig: {
      temperature: 1.0,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1.0,
    },
  },
  // Qwen2-Math
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2-Math-1.5B-Instruct-q4f16_1-MLC',
    recommendedConfig: {
      temperature: 1.0,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2-Math-1.5B-Instruct-q4f32_1-MLC',
    recommendedConfig: {
      temperature: 1.0,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    ...QWEN_COMMON_CONFIGS,
    name: 'Qwen2-Math-7B-Instruct-q4f16_1-MLC',
    recommendedConfig: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    name: 'Qwen2-Math-7B-Instruct-q4f32_1-MLC',
    ...QWEN_COMMON_CONFIGS,
    recommendedConfig: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  // Gemma 2
  {
    name: 'gemma-2-2b-it-q4f16_1-MLC',
    displayName: 'Gemma',
    provider: 'Google',
    recommendedConfig: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 1,
      top_p: 0.95,
    },
  },
  {
    name: 'gemma-2-2b-it-q4f32_1-MLC',
    displayName: 'Gemma',
    provider: 'Google',
    recommendedConfig: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 1,
      top_p: 0.95,
    },
  },
  {
    name: 'gemma-2-2b-it-q4f16_1-MLC-1k',
    displayName: 'Gemma',
    provider: 'Google',
    recommendedConfig: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 1,
      top_p: 0.95,
    },
  },
  {
    name: 'gemma-2-2b-it-q4f32_1-MLC-1k',
    displayName: 'Gemma',
    provider: 'Google',
    recommendedConfig: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 1,
      top_p: 0.95,
    },
  },
  {
    name: 'gemma-2-9b-it-q4f16_1-MLC',
    displayName: 'Gemma',
    provider: 'Google',
    recommendedConfig: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 1,
      top_p: 0.95,
    },
  },
  {
    name: 'gemma-2-9b-it-q4f32_1-MLC',
    displayName: 'Gemma',
    provider: 'Google',
    recommendedConfig: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 1,
      top_p: 0.95,
    },
  },
  {
    name: 'gemma-2-2b-jpn-it-q4f16_1-MLC',
    displayName: 'Gemma',
    provider: 'Google',
    recommendedConfig: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 1,
      top_p: 0.9,
    },
  },
  {
    name: 'gemma-2-2b-jpn-it-q4f32_1-MLC',
    displayName: 'Gemma',
    provider: 'Google',
    recommendedConfig: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 1,
      top_p: 0.9,
    },
  },
  // Phi3-mini-instruct
  {
    name: 'Phi-3-mini-4k-instruct-q4f16_1-MLC',
    displayName: 'Phi 3',
    provider: 'Microsoft',
    recommendedConfig: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
    },
  },
  {
    name: 'Phi-3-mini-4k-instruct-q4f32_1-MLC',
    displayName: 'Phi 3',
    provider: 'Microsoft',
    recommendedConfig: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
    },
  },
  {
    name: 'Phi-3-mini-4k-instruct-q4f16_1-MLC-1k',
    displayName: 'Phi 3',
    provider: 'Microsoft',
    recommendedConfig: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
    },
  },
  {
    name: 'Phi-3-mini-4k-instruct-q4f32_1-MLC-1k',
    displayName: 'Phi 3',
    provider: 'Microsoft',
    recommendedConfig: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
    },
  },
  {
    name: 'Llama-2-7b-chat-hf-q4f32_1-MLC-1k',
    displayName: 'Llama',
    provider: 'Meta',
    recommendedConfig: {
      temperature: 0.6,
      top_p: 0.9,
    },
  },
  {
    name: 'Llama-2-7b-chat-hf-q4f16_1-MLC-1k',
    displayName: 'Llama',
    provider: 'Meta',
    recommendedConfig: {
      temperature: 0.6,
      top_p: 0.9,
    },
  },
  {
    name: 'Llama-2-7b-chat-hf-q4f32_1-MLC',
    displayName: 'Llama',
    provider: 'Meta',
    recommendedConfig: {
      temperature: 0.6,
      top_p: 0.9,
    },
  },
  {
    name: 'Llama-2-7b-chat-hf-q4f16_1-MLC',
    displayName: 'Llama',
    provider: 'Meta',
    recommendedConfig: {
      temperature: 0.6,
      top_p: 0.9,
    },
  },
  {
    name: 'Llama-2-13b-chat-hf-q4f16_1-MLC',
    displayName: 'Llama',
    provider: 'Meta',
    recommendedConfig: {
      temperature: 0.6,
      top_p: 0.9,
    },
  },
  {
    name: 'phi-2-q4f16_1-MLC',
    displayName: 'Phi',
    provider: 'Microsoft',
    recommendedConfig: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: 'phi-2-q4f32_1-MLC',
    displayName: 'Phi',
    provider: 'Microsoft',
    recommendedConfig: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: 'phi-2-q4f16_1-MLC-1k',
    displayName: 'Phi',
    provider: 'Microsoft',
    recommendedConfig: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: 'phi-2-q4f32_1-MLC-1k',
    displayName: 'Phi',
    provider: 'Microsoft',
    recommendedConfig: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: 'phi-1_5-q4f16_1-MLC',
    displayName: 'Phi',
    provider: 'Microsoft',
    recommendedConfig: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: 'phi-1_5-q4f32_1-MLC',
    displayName: 'Phi',
    provider: 'Microsoft',
    recommendedConfig: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: 'phi-1_5-q4f16_1-MLC-1k',
    displayName: 'Phi',
    provider: 'Microsoft',
    recommendedConfig: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: 'phi-1_5-q4f32_1-MLC-1k',
    displayName: 'Phi',
    provider: 'Microsoft',
    recommendedConfig: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {

    ...TINY_LLAMA_COMMON_CONFIGS,
    name: 'TinyLlama-1.1B-Chat-v1.0-q4f16_1-MLC',
  },
  {
    ...TINY_LLAMA_COMMON_CONFIGS,
    name: 'TinyLlama-1.1B-Chat-v1.0-q4f32_1-MLC',
  },
  {

    ...TINY_LLAMA_COMMON_CONFIGS,
    name: 'TinyLlama-1.1B-Chat-v1.0-q4f16_1-MLC-1k',
  },
  {
    ...TINY_LLAMA_COMMON_CONFIGS,
    name: 'TinyLlama-1.1B-Chat-v1.0-q4f32_1-MLC-1k',
  },
  {
    ...TINY_LLAMA_COMMON_CONFIGS,
    name: 'TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC',
    recommendedConfig: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    ...TINY_LLAMA_COMMON_CONFIGS,
    name: 'TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC',
    recommendedConfig: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    ...TINY_LLAMA_COMMON_CONFIGS,
    name: 'TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC-1k',
    recommendedConfig: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    ...TINY_LLAMA_COMMON_CONFIGS,
    name: 'TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC-1k',
    recommendedConfig: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
];
