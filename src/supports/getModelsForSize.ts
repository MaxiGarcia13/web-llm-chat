import type { Model } from '@/types';

const microsoft = 'Microsoft';

export function getModelsForSize(models: Array<Model>, size: 'small' | 'medium' | 'large'): Array<Model> {
  if (size === 'small') {
    return models.filter((model) => {
      if (model.provider === microsoft) {
        return model.name?.match(/mini/i);
      }
      // eslint-disable-next-line regexp/no-super-linear-backtracking, regexp/optimal-quantifier-concatenation
      return model.name?.match(/^.*(?:\d+(?:[._]\d+)?M|[0-2](?:[._]\d+)?B).*$/i);
    });
  }

  if (size === 'medium') {
    return models.filter((model) => {
      if (model.provider === microsoft) {
        return model.name?.match(/vision/i);
      }

      // eslint-disable-next-line regexp/no-useless-non-capturing-group
      return model.name?.match(/^.*(?:[3-7](?:[._]\d+)?B).*$/i);
    },
    );
  }

  return models.filter((model) => {
    // eslint-disable-next-line regexp/no-super-linear-backtracking
    return model.name?.match(/^.*(?:[89](?:[._]\d+)?B|[1-9]\d+(?:[._]\d+)?B).*$/i);
  });
}
