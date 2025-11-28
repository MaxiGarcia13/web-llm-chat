import type { Model } from '@/types';

export function getModelForName(models: Array<Model>, name: string): Model | undefined {
  return models.find(model => model.name === name);
}
