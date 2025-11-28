import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Chat } from '@/components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col items-center justify-center h-full">
      <Chat />
    </div>
  </StrictMode>,
);
