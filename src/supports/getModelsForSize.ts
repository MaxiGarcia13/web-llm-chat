import type { Model } from '@/types';

export function getModelsForSize(models: Array<Model>, size: 'small' | 'medium' | 'large'): Array<Model> {
  if (size === 'small') {
    return models.filter(model =>
      // eslint-disable-next-line regexp/no-super-linear-backtracking, regexp/optimal-quantifier-concatenation
      model.name?.match(/^.*(?:\d+(?:[._]\d+)?M|[0-2](?:[._]\d+)?B).*$/i),
    );
  }

  if (size === 'medium') {
    return models.filter(model =>
      // eslint-disable-next-line regexp/no-useless-non-capturing-group
      model.name?.match(/^.*(?:[3-7](?:[._]\d+)?B).*$/i),
    );
  }

  // eslint-disable-next-line regexp/no-super-linear-backtracking
  return models.filter(model => model.name?.match(/^.*(?:[89](?:[._]\d+)?B|[1-9]\d+(?:[._]\d+)?B).*$/i));
}
