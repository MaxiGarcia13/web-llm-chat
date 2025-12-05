import type { Model } from '@/types';
import { useMemo, useState } from 'react';
import { cn, getModelForName, getModelsForSize } from '@/supports';

interface ChatModelSelectorProps {
  className?: string
  models: Array<Model>
  model: Model
  onChange: (model: Model) => void
}

export function ChatModelSelector({ className, model, models, onChange }: ChatModelSelectorProps) {
  const [selectedProvider, setSelectedProvider] = useState(model.provider);
  const [selectedModel, setSelectedModel] = useState<Model | undefined>(model);

  const modelNames = useMemo<string[]>(() => {
    const names = new Set<string>();

    models.forEach((model) => {
      names.add(model.provider);
    });

    return Array.from(names);
  }, [models]);

  const modelGroups = useMemo<Record<string, string[]>>(() => {
    const filteredModels = models.filter(model => model.provider === selectedProvider);

    return {
      Small: getModelsForSize(filteredModels, 'small').map(model => model.name),
      Medium: getModelsForSize(filteredModels, 'medium').map(model => model.name),
      Large: getModelsForSize(filteredModels, 'large').map(model => model.name),
    };
  }, [selectedProvider, models]);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const model = getModelForName(models, e.target.value);

    if (model) {
      setSelectedModel(model);
      onChange(model);
    }
  };

  return (
    <section className={cn('flex gap-2 px-4 py-2', className)}>
      <select
        className="outline-blue-500"
        value={selectedProvider}
        onChange={(e) => {
          setSelectedProvider(e.target.value);
          setSelectedModel(undefined);
        }}
      >
        {modelNames.map(displayName => (
          <option key={displayName} value={displayName}>
            {displayName}
          </option>
        ))}
      </select>
      <select
        value={selectedModel?.name}
        onChange={handleOptionChange}
        className="outline-blue-500 w-full max-w-[366px]"
      >
        {Object.keys(modelGroups).map((key) => {
          const models = modelGroups[key];

          return (
            <optgroup key={key} label={key}>
              {
                models.map(model => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))
              }
            </optgroup>
          );
        })}
      </select>
    </section>
  );
}
