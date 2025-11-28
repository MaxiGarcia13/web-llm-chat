import { cn } from '@/supports';
import { Img } from '../img';

export function ChatNoMessages({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center gap-4', className)}>
      <Img src="/img/maxi-gpt.png" className="object-contain h-[200px]" alt="Max GPT" />
    </div>
  );
}
