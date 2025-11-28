import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Chat } from '@/components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Chat />
  </StrictMode>,
);
