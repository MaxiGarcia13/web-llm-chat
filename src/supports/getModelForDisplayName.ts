import type { Model } from '@/types';

export function getModelForDisplayName(models: Array<Model>, displayName: string): Model | undefined {
  return models.find(model => model.displayName === displayName);
}
