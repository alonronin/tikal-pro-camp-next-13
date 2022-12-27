import { ReactNode } from 'react';

export interface ComponentsPageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: ComponentsPageWrapperProps) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

export default PageWrapper;
