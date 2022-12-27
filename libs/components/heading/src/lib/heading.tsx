/* eslint-disable-next-line */
import { ReactNode } from 'react';

export interface ComponentsHeadingProps {
  children: ReactNode;
}

export function Heading({ children }: ComponentsHeadingProps) {
  return <h1 className="font-bold text-2xl text-blue-500">{children}</h1>;
}

export default Heading;
