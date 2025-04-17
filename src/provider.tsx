import type { NavigateOptions } from 'react-router-dom';

import { HeroUIProvider } from '@heroui/system';
import { useHref, useNavigate } from 'react-router-dom';
import { MemeProvider } from './features/meme/MemeProvider';

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

export function Provider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <MemeProvider>{children}</MemeProvider>
    </HeroUIProvider>
  );
}
